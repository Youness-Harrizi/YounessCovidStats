import { Component, OnInit } from '@angular/core';
import {CovidApiService} from 'src/app/covid-api.service'
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-covid-page',
  templateUrl: './covid-page.component.html',
  styleUrls: ['./covid-page.component.css']
})
export class CovidPageComponent implements OnInit {

  newConfirmedGlobal:number;newConfirmedGlobal7days:number;
  newDeathsGlobal:number;newDeathsGlobal7days:number;
  totalRecoveredGlobal:number;totalRecoveredGlobalFromBegining:number;
  totalconfirmedGlobal:number;totalconfirmedGlobalFromBegining:number;
  totalDeathsGlobal:number;totalDeathsGlobalFromBegining:number;
  totalActiveGlobal:number;

newRecoveredGlobal:number;newRecoveredGlobal7days:number;
  recoveryRateGlobal:number;mortalityrateGlobal:number;

  //pie charts global data

  public pieChartLabels = ['Dead cases','Recovered cases','Active cases'];
    public pieChartData = [0,0, 1800];
    public pieChartType = 'pie';

// bar chart global
public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['13 novembre', '12 novembre', '11 novembre', '10 novembre', '9 novembre', '8 novembre', '7 novembre'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [];


// line chart global

public lineChartOptions = {
    responsive: true};
public lineChartLegend = true;
 public  lineChartType = 'line';
public lineChartData=[];
public lineChartLabels=[]; // dates that shoulb retrieved from another url


// challenge 2
public legitimateUsers={};
  private user;
private legitimateBoolean=false;

public news=[]; // that we get from the firestore
//we will first fetch the news array and then update it

// to be modified
public countries=["Lithuania", "Macedonia, Republic of", "Malawi", "Maldives", "American Samoa", "Gambia", "Czech Republic", "Greece", "Moldova", "Norfolk Island", "Zimbabwe", "Bulgaria", "Cambodia", "Saint-Martin (French part)", "Barbados", "Guatemala", "Hungary", "Kiribati", "Latvia", "Madagascar", "China", "Cook Islands", "French Polynesia", "Suriname", "New Zealand", "Portugal", "Morocco", "Iraq", "Ethiopia", "Ghana", "Martinique", "Mali", "Mexico", "Palau", "Poland", "Tanzania, United Republic of", "Equatorial Guinea", "France", "Haiti", "Iceland", "Niue", "Peru", "Ukraine", "Cameroon", "Georgia", "Congo (Kinshasa)", "Algeria", "Cape Verde", "Saint Lucia", "Turks and Caicos Islands", "Malta", "Namibia", "Togo", "Argentina", "Hong Kong, SAR China", "South Africa", "Guinea", "Liechtenstein", "Singapore", "Tuvalu", "Uzbekistan", "Antarctica", "Chad", "Germany", "New Caledonia", "Seychelles", "Somalia", "Côte d'Ivoire", "Holy See (Vatican City State)", "Monaco", "Cocos (Keeling) Islands", "Dominican Republic", "Fiji", "Afghanistan", "Benin", "Tokelau", "Uruguay", "Bahamas", "Saint Kitts and Nevis", "San Marino", "Faroe Islands", "Jamaica", "Rwanda", "United Arab Emirates", "Ecuador", "Estonia", "Anguilla", "Cyprus", "Malaysia", "Dominica", "Pakistan", "Tunisia", "El Salvador", "Kazakhstan", "Netherlands", "Russian Federation"];






  constructor(private covidapi: CovidApiService , private expensesService:ExpensesService) { }

  ngOnInit(): void {
    this.covidapi.getGlobalData().subscribe({

      next:(result)=>{}

    });



    this.covidapi.getLast7daysData().subscribe({

      next:(result)=>{}

    });
    this.covidapi.getFromBeginingData().subscribe({

      next:(result)=>{}

    });



    // retrieve general global data
    this.covidapi.retrieveGlobalDataFromFirestore().subscribe({

      next:(result)=>{
        //console.log(result);
        this.newConfirmedGlobal=result["newConfirmedGlobal"];
        this.newDeathsGlobal=result["newDeathsGlobal"];
        this.newRecoveredGlobal=result["newRecoveredGlobal"];
        this.totalRecoveredGlobal=result["totalRecoveredGlobal"];
        this.totalconfirmedGlobal=result["totalconfirmedGlobal"];
        this.totalDeathsGlobal=result['totalDeathsGlobal'];
        this.totalActiveGlobal=this.totalconfirmedGlobal-this.totalRecoveredGlobal-this.totalDeathsGlobal;
        console.log(this.totalActiveGlobal);
        this.recoveryRateGlobal=this.totalRecoveredGlobal/this.totalconfirmedGlobal;
        this.mortalityrateGlobal=this.totalDeathsGlobal/this.totalconfirmedGlobal;
        this.pieChartData=[this.totalDeathsGlobal,this.totalRecoveredGlobal,this.totalActiveGlobal];
      }
    });


    // retrieve from last 7 days
    this.covidapi.retrieve7dayGlobalDataFromFirestore().subscribe({

    next:(result)=>{
      console.log(result);
      this.newConfirmedGlobal7days=result["newConfirmedGlobal"];
      this.newDeathsGlobal7days=result["newDeathsGlobal"];
      this.newRecoveredGlobal7days=result["newRecoveredGlobal"]

      //this.totalActiveGlobal7days=this.totalconfirmedGlobal7days-this.totalRecoveredGlobal7days-this.totalDeathsGlobal7days;

      //console.log("total active 7 days global : !!!!!!!")
      //console.log(this.newRecoveredGlobal7days)
      // bar charts params
   this.barChartData = [
    {data: this.newDeathsGlobal7days, label: 'Daily deaths'},
    {data:this.newRecoveredGlobal7days , label: 'new recovered'},
        {data:this.newConfirmedGlobal7days , label:'daily new cases'}

  ];
      //this.pieChartData=[this.totalDeathsGlobal,this.totalRecoveredGlobal,this.totalActiveGlobal]
    }
  });


  this.covidapi.retrieveFromBeginigDataFromFirestore().subscribe({

  next:(result)=>{
    //console.log(result);
    this.totalconfirmedGlobalFromBegining=result["totalconfirmedGlobal"];
    this.totalDeathsGlobalFromBegining=result["totalDeathsGlobal"];
    this.totalRecoveredGlobalFromBegining=result["totalRecoveredGlobal"];


    //this.totalActiveGlobal7days=this.totalconfirmedGlobal7days-this.totalRecoveredGlobal7days-this.totalDeathsGlobal7days;

    //console.log("From  : !!!!!!!");
    //console.log(this.totalDeathsGlobalFromBegining);
    // bar charts params
 this.lineChartData = [
  {data: this.totalDeathsGlobalFromBegining, label: ' deaths'},
  {data:this.totalRecoveredGlobalFromBegining , label: 'total recovered'},
      {data:this.totalconfirmedGlobalFromBegining , label:'total confirmed cases'}

];
    //this.pieChartData=[this.totalDeathsGlobal,this.totalRecoveredGlobal,this.totalActiveGlobal]
  }
});



/*
================================================================================================================
start of second chalenge

*/


// challenge 2 retrive the news

this.covidapi.retrieveLegitimateUsersFromFirestoreAndCheckuser().subscribe({

next:(result)=>{
  //console.log(JSON.parse(result[0]))
  console.log("legitimate users: ");

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

console.log("done 0");
// get the news
this.covidapi.retrieveNewsFromFirestore().subscribe({

  next:(result)=>{
    this.news=Array(result)[0]["news"]
    console.log(Array(result))
  }

});



}
});


//setTimeout(function(){this.testFunction(this.legitimateUsers) }, 3000);











  }


updateNews(value:string){

  console.log("entered news:"+value);
  if(this.legitimateBoolean==true){
    console.log("success");


    // send the news to firestore
    this.covidapi.updateNewsDataFirestore(value)




  }
  else{
    console.log("failure not allowed ")
  }

  // get the news
  this.covidapi.retrieveNewsFromFirestore().subscribe({

    next:(result)=>{

      this.news=Array(result)[0]["news"]
      console.log(Array(result))
    }

  });
}


}
