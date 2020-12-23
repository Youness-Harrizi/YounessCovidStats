import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Expense } from './expense.model';
@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private user: User; //
  private legitimateUsers=[];

  constructor(private afAuth: AngularFireAuth,
    private router: Router, private firestore : AngularFirestore) { }

  async signInWithGoogle(){
   const credientals = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   this.user = {
      uid: credientals.user.uid,
      displayName: credientals.user.displayName,
      email: credientals.user.email
    };
    localStorage.setItem("user", JSON.stringify(this.user));
    this.updateUserData();
    this.router.navigate(["covid"]);
    // get legitimate users from firestore


  }

  private updateUserData(){
    this.firestore.collection("users").doc(this.user.uid).set({
      uid: this.user.uid,
      displayName: this.user.displayName,
      email: this.user.email
    }, { merge: true});
  }




  getUser(){
    if(this.user == null && this.userSignedIn()){
      this.user = JSON.parse(localStorage.getItem("user"));
    }
    return this.user;
  }

  userSignedIn(): boolean{
    return JSON.parse(localStorage.getItem("user")) != null;
  }

  signOut(){
    this.afAuth.signOut();
    localStorage.removeItem("user");
    this.user = null;
    this.router.navigate(["signin"]);
  }

  // challenge 2




}
