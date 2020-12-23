import { Component, OnInit } from '@angular/core';
import {CovidApiService} from 'src/app/covid-api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  public countries=[];
  public yesterdayDate=this.covidapi.getYesterdayDate()+"T00:00:00Z";
  public result7days={"Confirmed":[],"Active":[],"Deaths":[],"Recovered":[]}

  public pieChartLabels = ['Dead cases','Recovered cases','Active cases'];
    public pieChartData = [0,0, 1800];
    public pieChartType = 'pie';
    public country="Uruguay" //iniotial country
    public legitimateBoolean=false;
    public legitimateUsers={};
    private user;

    // yesterday data
    public active=0; public recovered=0; public deaths=0; public confirmed=0;

    // total data from the begining
      public totalActive=0; public totalRecovered=0; public totalDeaths=0; public totalConfirmed=0;


      // rates
      public recoveryRateGlobal:number;public mortalityrateGlobal:number;

      // 7 days data
        public from7daysActive=0; public from7daysRecovered=0; public from7daysDeaths=0; public from7daysConfirmed=0;

        public stringdates=[];

// bar data

// bar chart global
public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};

// to be changed
public barChartLabels = ['13 novembre', '12 novembre', '11 novembre', '10 novembre', '9 novembre', '8 novembre', '7 novembre'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [];


// news
public newsPerCountry=[];



constructor(private covidapi: CovidApiService) { }

  ngOnInit(): void {
    // update bar chart
    this.updateBarCharLabel();


    // get all countries

    this.covidapi.getAllCountries().subscribe({

      next:(result)=>{
        var jsonresult=JSON.parse(result);
        //console.log(jsonresult);

        for(var i=0;i<jsonresult.length;i++){
          //console.log(jsonresult[i]);
        this.countries.push(jsonresult[i]["Country"])
        }
        // update firestore of all countries
        console.log("countries!!!!!");
        console.log(this.countries.length);
    }

    });





  // adding string dates

  for(var i=1;i<8;i++ ){
    var d = new Date();           // <- Get the current date
  d.setDate(d.getDate() - i);

    this.stringdates.push(this.covidapi.getDate(d)+"T00:00:00Z")
  }



// ---------------------------------
// news section
//-------------------------------------------------------------
this.covidapi.retrieveLegitimateUsersFromFirestoreAndCheckuser().subscribe({

next:(result)=>{
  //console.log(JSON.parse(result[0]))
  //console.log("legitimate users: ");

  this.legitimateUsers=result[0];
  //console.log(this.legitimateUsers);
  // retrieve the user from local storage
  this.user = JSON.parse(localStorage.getItem("user"));
  let useremail=this.user["email"]
  console.log("my user :"+JSON.stringify(useremail));

  // 3 to be adapted
  for(var key in this.legitimateUsers)
  {
    console.log(key);
    console.log(this.legitimateUsers)
    let tmpmail=this.legitimateUsers[key]

    if(tmpmail==useremail){
      this.legitimateBoolean=true;
      console.log("legitimate user!!!!!!")
    }

  }






}
});




  }

  // send data to firestore
  updateValues(country){
    console.log(country);
    this.country=country;
    this.covidapi.getDataPerCountry(country).subscribe({

      next:(result)=>{}

    });


    this.covidapi.retrievePerCountrylDataFromFirestore(this.country,this.yesterdayDate).subscribe({

    next:(result)=>{
      //console.log(result);
     //console.log(this.yesterdayDate)
    // console.log("updating value !!!!!!!!")
    //  console.log(result);
      if(result=== undefined){
        this.retrieveDataDayBefore()
      }
      //console.log(JSON.parse(result["Active"]);

       // new active
       this.active=this.absoluteValue(result["Active"]);
      this.confirmed=result["Confirmed"];
      this.deaths=result["Deaths"];
      this.recovered=result["Recovered"];
      //this.active=this.totalConfirmed-this.totalDeaths-this.totalRecovered;

      this.pieChartData=[this.deaths,this.recovered,this.active];
    }
  });


  // news
  this.covidapi.retrieveNewsFromFirestorePerCountry(this.country).subscribe({


    next:(result)=>{

      if(typeof Array(result)[0]!=="undefined" ){
      this.newsPerCountry=Array(result)[0]["news"]
      console.log(Array(result))
    }
    else{
      this.newsPerCountry=[];
    }
    }

  });






// updating 7days value data

this.result7days={"Confirmed":[],"Active":[],"Deaths":[],"Recovered":[]}

for(let mydate of this.stringdates){

this.covidapi.retrievePerCountrylDataFromFirestore(this.country,mydate).subscribe(partial=>{
 //console.log("value for date"+mydate);
 this.result7days["Confirmed"].push(parseInt(partial["Confirmed"]));
   this.result7days["Active"].push(parseInt(partial["Active"]));
   this.result7days["Deaths"].push(parseInt(partial["Deaths"]));
   this.result7days["Recovered"].push(parseInt(partial["Recovered"]));

   // logging result7days
  //console.log(this.result7days);

});


}


setTimeout(() => {  console.log("result7days "+JSON.stringify(this.result7days));
this.barChartData = [
 {data: this.result7days["Deaths"], label: 'Daily deaths'},
 {data:this.result7days["Recovered"] , label: 'new recovered'},
     {data:this.result7days["Confirmed"] , label:'daily new cases'}

];
}, 500);



// get total data
this.covidapi.getGlobalDataperCountry(this.country).subscribe({

  next:(result)=>{}

});

this.covidapi.retrievePerCountryTotalDataFromFirestore(this.country).subscribe({

next:(result)=>{
  //console.log(result);

  //console.log(result);
  //console.log(JSON.parse(result["Active"]);

  this.totalConfirmed=result["totalconfirmed"];
  this.totalDeaths=result["totalDeaths"];
  this.totalRecovered=result["totalRecovered"];
  //this.active=this.totalConfirmed-this.totalDeaths-this.totalRecovered;
  this.mortalityrateGlobal=this.totalDeaths/this.totalConfirmed
  this.recoveryRateGlobal=this.totalRecovered/this.totalConfirmed
  //console.log("Total active"+this.totalActive.toString());

}
});






}

updateNewsPerCountry(value){

  console.log("entered news:"+value);
  if(this.legitimateBoolean==true){
    console.log("success");

    // send the news to firestore
    this.covidapi.updateNewsDataFirestorePerCountry(this.country,value,this.newsPerCountry);

  }
  else{
    console.log("failure not allowed ")
  }

  // get the news another time
  this.covidapi.retrieveNewsFromFirestorePerCountry(this.country).subscribe({

    next:(result)=>{

      this.newsPerCountry=Array(result)[0]["news"]
      console.log(Array(result))
    }

  });

}


retrieveDataDayBefore(){
  console.log("data for today isn't available ");

  // retrieve data of previous day

  this.covidapi.retrievePerCountrylDataFromFirestore(this.country,this.covidapi.getDayBeforeN(2)+"T00:00:00Z").subscribe({

  next:(result)=>{
    //console.log(result);
   //console.log(this.yesterdayDate)
   console.log("updating value 2 !!!!!!!!");
    console.log(result);
    console.log(result["Active"]);

    this.active=this.absoluteValue(result["Active"]); // new active
    this.confirmed=result["Confirmed"];
    this.deaths=result["Deaths"];
    this.recovered=result["Recovered"];

    this.pieChartData=[this.deaths,this.recovered,this.active];
  }
})
}


updateBarCharLabel(){

  for(let i=0;i<this.barChartLabels.length;i++){
    this.barChartLabels[i]=this.covidapi.getDayBeforeN(i+1);

  }
  this.barChartLabels.reverse();
  //console.log(this.barChartLabels);
}


absoluteValue(n){
  if (n>0){
    return n
  }
  else{
    return -n
  }
}

}
