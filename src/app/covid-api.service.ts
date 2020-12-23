import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private http: HttpClient, private firestore : AngularFirestore) {  }
private globalDataUrl = "https://api.covid19api.com/summary";
private last7daysUrl="https://api.covid19api.com/world?from="+this.getLastWeekDate()+"&to="+this.getCurrentDate();
private fromBeginingUrl="https://api.covid19api.com/world?from=2020-04-13&to="+this.getCurrentDate();
private date=new Date();


private countries=[];private urlCountriesenum="https://api.covid19api.com/countries" //all available countries
private countriesData=[];
private urlCountries="";

// per country
private result7days={"Confirmed":0,"Active":0,"Deaths":0,"Recovered":0};
// ["maroc":{New cases:4687,"ConfirmedCases":"",ConfirmedCases:""}]
// news

private oldNews=[];private oldNewsPerCountry=[];
//date_ob === date object
 public getDate(date_ob){
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let result=year + "-" + month + "-" + date
return result;
 }
 private getCurrentDate(){
   return this.getDate(new Date());
 }

 private getLastWeekDate(){
   var d = new Date();           // <- Get the current date
d.setDate(d.getDate() - 8);   // <- Substract 7 days
return this.getDate(d)
 }
 public getYesterdayDate(){
   var d = new Date();           // <- Get the current date
d.setDate(d.getDate() - 1);   // <- Substract 7 days
return this.getDate(d)
 }

 public getDayBeforeN(n){
   var d = new Date();           // <- Get the current date
d.setDate(d.getDate() - n);   // <- Substract 7 days
return this.getDate(d)
 }





// get global data from api
// first we'll just print them
  getGlobalData() {

    return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(
      map(result => {
        var jsonresult=JSON.parse(result);
        var globalFlag="01234";
        this.updateCovidDataGlobal(jsonresult,globalFlag);





      })
    )
}
// get total data per country
getGlobalDataperCountry(country){

  return this.http.get(this.globalDataUrl, { responseType: 'text' }).pipe(
    map(result => {
      var jsonresult=JSON.parse(result);

      this.updateCovidDataGlobalPerCountry(jsonresult,country);





    })
  )
}





private updateCovidDataGlobal(result,flag){
  var newConfirmed=result["Global"]["NewConfirmed"];
  var totalconfirmed=result["Global"]["TotalConfirmed"];
  //console.log(newConfirmed);
  //console.log(totalconfirmed);



  this.firestore.collection("covid").doc(flag).collection("global").doc("yugyu").set({

    newConfirmedGlobal: result["Global"]["NewConfirmed"],
    totalconfirmedGlobal: result["Global"]["TotalConfirmed"],
   newDeathsGlobal: result["Global"]["NewDeaths"],
   totalDeathsGlobal:result["Global"]["TotalDeaths"],
    newRecoveredGlobal: result["Global"]["NewRecovered"],
   totalRecoveredGlobal: result["Global"]["TotalRecovered"]



  });
//  console.log("done");
}


// update per country data

private updateCovidDataGlobalPerCountry(result,country){
var partial=result["Countries"];
//console.log("partial before goal :"+JSON.stringify(partial))
var goal={};
for(let i=0;i<partial.length;i++){
  if(partial[i]["Country"]==country){
    goal=partial[i]
  }
}

//console.log("goal"+JSON.stringify(goal));

  this.firestore.collection(country).doc("summary").set({
    totalconfirmed: goal["TotalConfirmed"],
   totalDeaths:goal["TotalDeaths"],
   totalRecovered: goal["TotalRecovered"]

  });

}


// get global data from firestore
 retrieveGlobalDataFromFirestore(){
   var flag="01234";
// The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

  return this.firestore.collection("covid").doc(flag).collection("global").doc("yugyu").valueChanges();
}

// retrive the news
retrieveNewsFromFirestore(){
 return this.firestore.collection("users_news").doc("global").valueChanges();
}
retrieveNewsFromFirestorePerCountry(country:string){
  return this.firestore.collection(country).doc("news").valueChanges();
}






retrieve7dayGlobalDataFromFirestore(){
  var flag="7daysGlobal";
// The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

 return this.firestore.collection("covid").doc(flag).collection("global7days").doc("yugyu").valueChanges();
}
retrieveFromBeginigDataFromFirestore(){
  var flag="fromBeginingGlobal";
// The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

 return this.firestore.collection("covid").doc(flag).collection("global13april").doc("yugyu").valueChanges();
}


// retrieve data for countries
// get global data from firestore
 retrievePerCountrylDataFromFirestore(country,stringdate){
   // stringdate finish with T00:00:00Z

  return this.firestore.collection(country).doc(stringdate).valueChanges();
}
retrievePerCountryTotalDataFromFirestore(country){
  // stringdate finish with T00:00:00Z

 return this.firestore.collection(country).doc("summary").valueChanges();
}








getLast7daysData() {
  return this.http.get(this.last7daysUrl, { responseType: 'text' }).pipe(
    map(result => {
      let jsonresult=JSON.parse(result)
      let last7daysFlag="7daysGlobal";
      var result7days={"NewConfirmed":[],"TotalConfirmed":[],"NewDeaths":[],"TotalDeaths":[],"NewRecovered":[],"TotalRecovered":[]};
      for (var i = 0; i < jsonresult.length; i++) {
        for(var key in result7days){
          result7days[key].push(parseInt(jsonresult[i][key]));
        }}
      this.updateCovidlast7daysGlobal(result7days,last7daysFlag);

    })
  )
}


private updateCovidlast7daysGlobal(result,flag){

  //console.log("Updating last 7 days !!!!");


  //console.log(result);
  this.firestore.collection("covid").doc(flag).collection("global7days").doc("yugyu").set({

  newConfirmedGlobal: result["NewConfirmed"],
  totalconfirmedGlobal: result["TotalConfirmed"],
 newDeathsGlobal: result["NewDeaths"],
 totalDeathsGlobal:result["TotalDeaths"],
  newRecoveredGlobal: result["NewRecovered"],
 totalRecoveredGlobal: result["TotalRecovered"]



});



  //console.log("done");
}


// from begining total cases

getFromBeginingData() {
  return this.http.get(this.fromBeginingUrl, { responseType: 'text' }).pipe(
    map(result => {
      let jsonresult=JSON.parse(result)
      let flag="fromBeginingGlobal";
      var frombeginingdata={"TotalConfirmed":[],"TotalDeaths":[],"TotalRecovered":[]};
      for (var i = 0; i < jsonresult.length; i++) {
        for(var key in frombeginingdata){
          frombeginingdata[key].push(parseInt(jsonresult[i][key]));
        }}
      this.updateCovidFromBeginingGlobal(frombeginingdata,flag);

    })
  )

}

private updateCovidFromBeginingGlobal(result,flag){
  //console.log(result);
  this.firestore.collection("covid").doc(flag).collection("global13april").doc("yugyu").set({
  totalconfirmedGlobal: result["TotalConfirmed"],
 totalDeathsGlobal:result["TotalDeaths"],
 totalRecoveredGlobal: result["TotalRecovered"]

});



  //console.log("done from 13 april ");
}



// set the variable coutries
 getAllCountries() {

   return this.http.get(this.urlCountriesenum, { responseType: 'text' }).pipe(
 map(result => {return result


 })
)

}




// can't update all countries
// not used !!!!!

/*private updateDataAllCountries(countries){
  //this.getAllCountries();
  var baseUrl="https://api.covid19api.com/country/"
  var endrl="?from=2020-11-19&to=2020-11-20"
  var url=""
  var flag="countries";
  //console.log(countries)
  for(const country of countries){
  //  console.log(country)

    url=baseUrl+country;
    var result=this.httpGet(url);
    var jsonresult=JSON.parse(result);
    console.log("json result:")
    console.log(jsonresult)

  }


}*/

getDataPerCountry(country){

  var baseUrl="https://api.covid19api.com/country/"
  var endUrl="?from="+this.getLastWeekDate()+"&to="+this.getCurrentDate();
  var url=baseUrl+country+endUrl;
 //console.log("url: "+url);
  var flag="countries";
  return this.http.get(url, { responseType: 'text' }).pipe(
    map(result => {
      var jsonresult=JSON.parse(result);

      //console.log("json result: getDataPerCountry!!!!!!!!!"+JSON.stringify(jsonresult))
    //  console.log(jsonresult);
      // get the 7 last days which are important to us
      this.updateCovidDataPerCountry(jsonresult,flag,country);
    })
  )
}

// print perv country data in firestore
private updateCovidDataPerCountry(result,flag,country){

  var tmpConfirmed=0;var tmpDeaths=0;var tmpRecovered=0;var tmpActive=0;

  for(var i=0;i<result.length;i++){
    var actual=result[i];

    var from7days={}
    var date=actual["Date"];




    //console.log(date);
    //console.log(actual);
  this.firestore.collection(country).doc(date).set({

  Confirmed:actual["Confirmed"]-tmpConfirmed,
  Deaths:actual["Deaths"]-tmpDeaths,
  Recovered:actual["Recovered"]-tmpRecovered,
  Active:actual["Active"]-tmpActive
});


/*this.firestore.collection(country).doc("news").set({

news:["starting news "]
});*/

tmpConfirmed=actual["Confirmed"];tmpActive=actual["Active"];
tmpRecovered=actual["Recovered"];tmpDeaths=actual["Deaths"];


}
}









// challenge 2
/*
1/ retrieve legitimate users

*/


//-------------------------------------------------
// news section

// ----------------------------------------------




retrieveLegitimateUsersFromFirestoreAndCheckuser(){
 var flag="myusers";
// The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

return this.firestore.collection("users_legitimate").valueChanges();
}

// add newds
async updateNewsDataFirestore(value ){


  var newscollections=this.firestore.collection("users_news").doc("global");
  const doc = await newscollections.valueChanges();
  doc.subscribe({

    next:(result)=>{

      this.oldNews=result["news"];

    }});


    let mynews=[value];
    //mynews.push(this.oldNews[0]);
    console.log("old news !!!!!!!!");
    console.log(this.oldNews)
    if(this.oldNews.length>0){


    this.firestore.collection("users_news").doc("global").set({

      news:mynews.concat(this.oldNews) // we should first get the previous news



    });

// we'll create a random starting news
  }



}



// per country

async updateNewsDataFirestorePerCountry(country,value,oldNewsVariable ){

 // init oldNews to []
 //this.oldNewsPerCountry=["start for country :"+country];
  var newscollections=this.firestore.collection(country).doc("news");
  const doc = await newscollections.get();
  doc.subscribe({

    next:(result)=>{
      console.log("result[news]");
      console.log(result)
      //this.oldNewsPerCountry=result["news"];

        let mynews=[value];
        this.firestore.collection(country).doc("news").set({
          news:mynews.concat(oldNewsVariable) // we should first get the previous news

        });


    }});



    //mynews.push(this.oldNews[0]);
    console.log("old news!!!!!!!!")
    //console.log(mynews.concat(this.oldNewsPerCountry))
    if(this.oldNewsPerCountry.length>0){
      console.log(this.oldNewsPerCountry)

    }}








// random
private httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

private  sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}




}
