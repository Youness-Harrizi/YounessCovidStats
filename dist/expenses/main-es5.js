(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/8oZ":
    /*!************************************************!*\
      !*** ./src/app/expenses/expenses.component.ts ***!
      \************************************************/

    /*! exports provided: ExpensesComponent */

    /***/
    function oZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function () {
        return ExpensesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../expenses.service */
      "RYAx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../add-expenses/add-expenses.component */
      "9yJv");

      var ExpensesComponent = /*#__PURE__*/function () {
        function ExpensesComponent(expensesService) {
          _classCallCheck(this, ExpensesComponent);

          this.expensesService = expensesService;
        }

        _createClass(ExpensesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = this.expensesService.getUser();
          }
        }]);

        return ExpensesComponent;
      }();

      ExpensesComponent.ɵfac = function ExpensesComponent_Factory(t) {
        return new (t || ExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]));
      };

      ExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExpensesComponent,
        selectors: [["app-expenses"]],
        decls: 13,
        vars: 1,
        consts: [[1, "row"], [1, "col-sm-6"], [1, "col-sm-6", "text-right"], [1, "btn", "btn-danger", 3, "click"], [1, "mx-auto", 2, "width", "200px"], ["type", "button", "routerLink", "/covid", 1, "btn", "btn-primary", "mr-4", "mt-4"], ["type", "button", "routerLink", "/countries", 1, "btn", "btn-primary", "mr-4", "mt-4"]],
        template: function ExpensesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpensesComponent_Template_button_click_5_listener() {
              return ctx.expensesService.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign Out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View global covid page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Check specific countries ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-add-expenses");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.displayName);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_3__["AddExpensesComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVuc2VzL2V4cGVuc2VzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpensesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-expenses',
            templateUrl: './expenses.component.html',
            styleUrls: ['./expenses.component.css']
          }]
        }], function () {
          return [{
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "/hi3":
    /*!********************************************!*\
      !*** ./src/app/signin/signin.component.ts ***!
      \********************************************/

    /*! exports provided: SigninComponent */

    /***/
    function hi3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../expenses.service */
      "RYAx");

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(expensesService) {
          _classCallCheck(this, SigninComponent);

          this.expensesService = expensesService;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 9,
        vars: 0,
        consts: [[1, "text-center"], [1, "mb-5"], ["src", "https://firebasestorage.googleapis.com/v0/b/expenses-67308.appspot.com/o/expenses.jpg?alt=media&token=595724b2-5124-4788-a6c9-4c0282c84f2c", "alt", "Expenses image", 2, "width", "70%"], [1, "btn", "btn-info", 3, "click"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manage your expenses easily");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_7_listener() {
              return ctx.expensesService.signInWithGoogle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sign In with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
          }]
        }], function () {
          return [{
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /media/sf_sharedVmFolder/cloudsProject/covid_project/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3Bkp":
    /*!**************************************!*\
      !*** ./src/app/covid-api.service.ts ***!
      \**************************************/

    /*! exports provided: CovidApiService */

    /***/
    function Bkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CovidApiService", function () {
        return CovidApiService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var CovidApiService = /*#__PURE__*/function () {
        function CovidApiService(http, firestore) {
          _classCallCheck(this, CovidApiService);

          this.http = http;
          this.firestore = firestore;
          this.globalDataUrl = "https://api.covid19api.com/summary";
          this.last7daysUrl = "https://api.covid19api.com/world?from=" + this.getLastWeekDate() + "&to=" + this.getCurrentDate();
          this.fromBeginingUrl = "https://api.covid19api.com/world?from=2020-04-13&to=" + this.getCurrentDate();
          this.date = new Date();
          this.countries = [];
          this.urlCountriesenum = "https://api.covid19api.com/countries"; //all available countries

          this.countriesData = [];
          this.urlCountries = ""; // per country

          this.result7days = {
            "Confirmed": 0,
            "Active": 0,
            "Deaths": 0,
            "Recovered": 0
          }; // ["maroc":{New cases:4687,"ConfirmedCases":"",ConfirmedCases:""}]
          // news

          this.oldNews = [];
          this.oldNewsPerCountry = [];
        } //date_ob === date object


        _createClass(CovidApiService, [{
          key: "getDate",
          value: function getDate(date_ob) {
            var date = ("0" + date_ob.getDate()).slice(-2);
            var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            var year = date_ob.getFullYear();
            var result = year + "-" + month + "-" + date;
            return result;
          }
        }, {
          key: "getCurrentDate",
          value: function getCurrentDate() {
            return this.getDate(new Date());
          }
        }, {
          key: "getLastWeekDate",
          value: function getLastWeekDate() {
            var d = new Date(); // <- Get the current date

            d.setDate(d.getDate() - 8); // <- Substract 7 days

            return this.getDate(d);
          }
        }, {
          key: "getYesterdayDate",
          value: function getYesterdayDate() {
            var d = new Date(); // <- Get the current date

            d.setDate(d.getDate() - 1); // <- Substract 7 days

            return this.getDate(d);
          }
        }, {
          key: "getDayBeforeN",
          value: function getDayBeforeN(n) {
            var d = new Date(); // <- Get the current date

            d.setDate(d.getDate() - n); // <- Substract 7 days

            return this.getDate(d);
          } // get global data from api
          // first we'll just print them

        }, {
          key: "getGlobalData",
          value: function getGlobalData() {
            var _this = this;

            return this.http.get(this.globalDataUrl, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var jsonresult = JSON.parse(result);
              var globalFlag = "01234";

              _this.updateCovidDataGlobal(jsonresult, globalFlag);
            }));
          } // get total data per country

        }, {
          key: "getGlobalDataperCountry",
          value: function getGlobalDataperCountry(country) {
            var _this2 = this;

            return this.http.get(this.globalDataUrl, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var jsonresult = JSON.parse(result);

              _this2.updateCovidDataGlobalPerCountry(jsonresult, country);
            }));
          }
        }, {
          key: "updateCovidDataGlobal",
          value: function updateCovidDataGlobal(result, flag) {
            var newConfirmed = result["Global"]["NewConfirmed"];
            var totalconfirmed = result["Global"]["TotalConfirmed"]; //console.log(newConfirmed);
            //console.log(totalconfirmed);

            this.firestore.collection("covid").doc(flag).collection("global").doc("yugyu").set({
              newConfirmedGlobal: result["Global"]["NewConfirmed"],
              totalconfirmedGlobal: result["Global"]["TotalConfirmed"],
              newDeathsGlobal: result["Global"]["NewDeaths"],
              totalDeathsGlobal: result["Global"]["TotalDeaths"],
              newRecoveredGlobal: result["Global"]["NewRecovered"],
              totalRecoveredGlobal: result["Global"]["TotalRecovered"]
            }); //  console.log("done");
          } // update per country data

        }, {
          key: "updateCovidDataGlobalPerCountry",
          value: function updateCovidDataGlobalPerCountry(result, country) {
            var partial = result["Countries"]; //console.log("partial before goal :"+JSON.stringify(partial))

            var goal = {};

            for (var i = 0; i < partial.length; i++) {
              if (partial[i]["Country"] == country) {
                goal = partial[i];
              }
            } //console.log("goal"+JSON.stringify(goal));


            this.firestore.collection(country).doc("summary").set({
              totalconfirmed: goal["TotalConfirmed"],
              totalDeaths: goal["TotalDeaths"],
              totalRecovered: goal["TotalRecovered"]
            });
          } // get global data from firestore

        }, {
          key: "retrieveGlobalDataFromFirestore",
          value: function retrieveGlobalDataFromFirestore() {
            var flag = "01234"; // The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

            return this.firestore.collection("covid").doc(flag).collection("global").doc("yugyu").valueChanges();
          } // retrive the news

        }, {
          key: "retrieveNewsFromFirestore",
          value: function retrieveNewsFromFirestore() {
            return this.firestore.collection("users_news").doc("global").valueChanges();
          }
        }, {
          key: "retrieveNewsFromFirestorePerCountry",
          value: function retrieveNewsFromFirestorePerCountry(country) {
            return this.firestore.collection(country).doc("news").valueChanges();
          }
        }, {
          key: "retrieve7dayGlobalDataFromFirestore",
          value: function retrieve7dayGlobalDataFromFirestore() {
            var flag = "7daysGlobal"; // The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

            return this.firestore.collection("covid").doc(flag).collection("global7days").doc("yugyu").valueChanges();
          }
        }, {
          key: "retrieveFromBeginigDataFromFirestore",
          value: function retrieveFromBeginigDataFromFirestore() {
            var flag = "fromBeginingGlobal"; // The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

            return this.firestore.collection("covid").doc(flag).collection("global13april").doc("yugyu").valueChanges();
          } // retrieve data for countries
          // get global data from firestore

        }, {
          key: "retrievePerCountrylDataFromFirestore",
          value: function retrievePerCountrylDataFromFirestore(country, stringdate) {
            // stringdate finish with T00:00:00Z
            return this.firestore.collection(country).doc(stringdate).valueChanges();
          }
        }, {
          key: "retrievePerCountryTotalDataFromFirestore",
          value: function retrievePerCountryTotalDataFromFirestore(country) {
            // stringdate finish with T00:00:00Z
            return this.firestore.collection(country).doc("summary").valueChanges();
          }
        }, {
          key: "getLast7daysData",
          value: function getLast7daysData() {
            var _this3 = this;

            return this.http.get(this.last7daysUrl, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var jsonresult = JSON.parse(result);
              var last7daysFlag = "7daysGlobal";
              var result7days = {
                "NewConfirmed": [],
                "TotalConfirmed": [],
                "NewDeaths": [],
                "TotalDeaths": [],
                "NewRecovered": [],
                "TotalRecovered": []
              };

              for (var i = 0; i < jsonresult.length; i++) {
                for (var key in result7days) {
                  result7days[key].push(parseInt(jsonresult[i][key]));
                }
              }

              _this3.updateCovidlast7daysGlobal(result7days, last7daysFlag);
            }));
          }
        }, {
          key: "updateCovidlast7daysGlobal",
          value: function updateCovidlast7daysGlobal(result, flag) {
            //console.log("Updating last 7 days !!!!");
            //console.log(result);
            this.firestore.collection("covid").doc(flag).collection("global7days").doc("yugyu").set({
              newConfirmedGlobal: result["NewConfirmed"],
              totalconfirmedGlobal: result["TotalConfirmed"],
              newDeathsGlobal: result["NewDeaths"],
              totalDeathsGlobal: result["TotalDeaths"],
              newRecoveredGlobal: result["NewRecovered"],
              totalRecoveredGlobal: result["TotalRecovered"]
            }); //console.log("done");
          } // from begining total cases

        }, {
          key: "getFromBeginingData",
          value: function getFromBeginingData() {
            var _this4 = this;

            return this.http.get(this.fromBeginingUrl, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var jsonresult = JSON.parse(result);
              var flag = "fromBeginingGlobal";
              var frombeginingdata = {
                "TotalConfirmed": [],
                "TotalDeaths": [],
                "TotalRecovered": []
              };

              for (var i = 0; i < jsonresult.length; i++) {
                for (var key in frombeginingdata) {
                  frombeginingdata[key].push(parseInt(jsonresult[i][key]));
                }
              }

              _this4.updateCovidFromBeginingGlobal(frombeginingdata, flag);
            }));
          }
        }, {
          key: "updateCovidFromBeginingGlobal",
          value: function updateCovidFromBeginingGlobal(result, flag) {
            //console.log(result);
            this.firestore.collection("covid").doc(flag).collection("global13april").doc("yugyu").set({
              totalconfirmedGlobal: result["TotalConfirmed"],
              totalDeathsGlobal: result["TotalDeaths"],
              totalRecoveredGlobal: result["TotalRecovered"]
            }); //console.log("done from 13 april ");
          } // set the variable coutries

        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            return this.http.get(this.urlCountriesenum, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              return result;
            }));
          } // can't update all countries
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

        }, {
          key: "getDataPerCountry",
          value: function getDataPerCountry(country) {
            var _this5 = this;

            var baseUrl = "https://api.covid19api.com/country/";
            var endUrl = "?from=" + this.getLastWeekDate() + "&to=" + this.getCurrentDate();
            var url = baseUrl + country + endUrl; //console.log("url: "+url);

            var flag = "countries";
            return this.http.get(url, {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
              var jsonresult = JSON.parse(result); //console.log("json result: getDataPerCountry!!!!!!!!!"+JSON.stringify(jsonresult))
              //  console.log(jsonresult);
              // get the 7 last days which are important to us

              _this5.updateCovidDataPerCountry(jsonresult, flag, country);
            }));
          } // print perv country data in firestore

        }, {
          key: "updateCovidDataPerCountry",
          value: function updateCovidDataPerCountry(result, flag, country) {
            var tmpConfirmed = 0;
            var tmpDeaths = 0;
            var tmpRecovered = 0;
            var tmpActive = 0;

            for (var i = 0; i < result.length; i++) {
              var actual = result[i];
              var from7days = {};
              var date = actual["Date"]; //console.log(date);
              //console.log(actual);

              this.firestore.collection(country).doc(date).set({
                Confirmed: actual["Confirmed"] - tmpConfirmed,
                Deaths: actual["Deaths"] - tmpDeaths,
                Recovered: actual["Recovered"] - tmpRecovered,
                Active: actual["Active"] - tmpActive
              });
              /*this.firestore.collection(country).doc("news").set({
              
              news:["starting news "]
              });*/

              tmpConfirmed = actual["Confirmed"];
              tmpActive = actual["Active"];
              tmpRecovered = actual["Recovered"];
              tmpDeaths = actual["Deaths"];
            }
          } // challenge 2

          /*
          1/ retrieve legitimate users
          
          */
          //-------------------------------------------------
          // news section
          // ----------------------------------------------

        }, {
          key: "retrieveLegitimateUsersFromFirestoreAndCheckuser",
          value: function retrieveLegitimateUsersFromFirestoreAndCheckuser() {
            var flag = "myusers"; // The main difference between valueChanges and get(), is that with get(), you get the data only once, whereas valueChanges (and snapshotChanges) is automatically fired whenever something changes in the database

            return this.firestore.collection("users_legitimate").valueChanges();
          } // add newds

        }, {
          key: "updateNewsDataFirestore",
          value: function updateNewsDataFirestore(value) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var newscollections, doc, mynews;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      newscollections = this.firestore.collection("users_news").doc("global");
                      _context.next = 3;
                      return newscollections.valueChanges();

                    case 3:
                      doc = _context.sent;
                      doc.subscribe({
                        next: function next(result) {
                          _this6.oldNews = result["news"];
                        }
                      });
                      mynews = [value]; //mynews.push(this.oldNews[0]);

                      console.log("old news !!!!!!!!");
                      console.log(this.oldNews);

                      if (this.oldNews.length > 0) {
                        this.firestore.collection("users_news").doc("global").set({
                          news: mynews.concat(this.oldNews) // we should first get the previous news

                        }); // we'll create a random starting news
                      }

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // per country

        }, {
          key: "updateNewsDataFirestorePerCountry",
          value: function updateNewsDataFirestorePerCountry(country, value, oldNewsVariable) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var newscollections, doc;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // init oldNews to []
                      //this.oldNewsPerCountry=["start for country :"+country];
                      newscollections = this.firestore.collection(country).doc("news");
                      _context2.next = 3;
                      return newscollections.get();

                    case 3:
                      doc = _context2.sent;
                      doc.subscribe({
                        next: function next(result) {
                          console.log("result[news]");
                          console.log(result); //this.oldNewsPerCountry=result["news"];

                          var mynews = [value];

                          _this7.firestore.collection(country).doc("news").set({
                            news: mynews.concat(oldNewsVariable) // we should first get the previous news

                          });
                        }
                      }); //mynews.push(this.oldNews[0]);

                      console.log("old news!!!!!!!!"); //console.log(mynews.concat(this.oldNewsPerCountry))

                      if (this.oldNewsPerCountry.length > 0) {
                        console.log(this.oldNewsPerCountry);
                      }

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // random

        }, {
          key: "httpGet",
          value: function httpGet(theUrl) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request

            xmlHttp.send(null);
            return xmlHttp.responseText;
          }
        }, {
          key: "sleep",
          value: function sleep(ms) {
            return new Promise(function (resolve) {
              return setTimeout(resolve, ms);
            });
          }
        }]);

        return CovidApiService;
      }();

      CovidApiService.ɵfac = function CovidApiService_Factory(t) {
        return new (t || CovidApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]));
      };

      CovidApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CovidApiService,
        factory: CovidApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CovidApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8pcU":
    /*!****************************************************!*\
      !*** ./src/app/covid-page/covid-page.component.ts ***!
      \****************************************************/

    /*! exports provided: CovidPageComponent */

    /***/
    function pcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CovidPageComponent", function () {
        return CovidPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/covid-api.service */
      "3Bkp");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../expenses.service */
      "RYAx");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function CovidPageComponent_li_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var info_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r2, " ");
        }
      }

      var CovidPageComponent = /*#__PURE__*/function () {
        function CovidPageComponent(covidapi, expensesService) {
          _classCallCheck(this, CovidPageComponent);

          this.covidapi = covidapi;
          this.expensesService = expensesService; //pie charts global data

          this.pieChartLabels = ['Dead cases', 'Recovered cases', 'Active cases'];
          this.pieChartData = [0, 0, 1800];
          this.pieChartType = 'pie'; // bar chart global

          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
          };
          this.barChartLabels = ['13 novembre', '12 novembre', '11 novembre', '10 novembre', '9 novembre', '8 novembre', '7 novembre'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = []; // line chart global

          this.lineChartOptions = {
            responsive: true
          };
          this.lineChartLegend = true;
          this.lineChartType = 'line';
          this.lineChartData = [];
          this.lineChartLabels = []; // dates that shoulb retrieved from another url
          // challenge 2

          this.legitimateUsers = {};
          this.legitimateBoolean = false;
          this.news = []; // that we get from the firestore
          //we will first fetch the news array and then update it
          // to be modified

          this.countries = ["Lithuania", "Macedonia, Republic of", "Malawi", "Maldives", "American Samoa", "Gambia", "Czech Republic", "Greece", "Moldova", "Norfolk Island", "Zimbabwe", "Bulgaria", "Cambodia", "Saint-Martin (French part)", "Barbados", "Guatemala", "Hungary", "Kiribati", "Latvia", "Madagascar", "China", "Cook Islands", "French Polynesia", "Suriname", "New Zealand", "Portugal", "Morocco", "Iraq", "Ethiopia", "Ghana", "Martinique", "Mali", "Mexico", "Palau", "Poland", "Tanzania, United Republic of", "Equatorial Guinea", "France", "Haiti", "Iceland", "Niue", "Peru", "Ukraine", "Cameroon", "Georgia", "Congo (Kinshasa)", "Algeria", "Cape Verde", "Saint Lucia", "Turks and Caicos Islands", "Malta", "Namibia", "Togo", "Argentina", "Hong Kong, SAR China", "South Africa", "Guinea", "Liechtenstein", "Singapore", "Tuvalu", "Uzbekistan", "Antarctica", "Chad", "Germany", "New Caledonia", "Seychelles", "Somalia", "Côte d'Ivoire", "Holy See (Vatican City State)", "Monaco", "Cocos (Keeling) Islands", "Dominican Republic", "Fiji", "Afghanistan", "Benin", "Tokelau", "Uruguay", "Bahamas", "Saint Kitts and Nevis", "San Marino", "Faroe Islands", "Jamaica", "Rwanda", "United Arab Emirates", "Ecuador", "Estonia", "Anguilla", "Cyprus", "Malaysia", "Dominica", "Pakistan", "Tunisia", "El Salvador", "Kazakhstan", "Netherlands", "Russian Federation"];
        }

        _createClass(CovidPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.covidapi.getGlobalData().subscribe({
              next: function next(result) {}
            });
            this.covidapi.getLast7daysData().subscribe({
              next: function next(result) {}
            });
            this.covidapi.getFromBeginingData().subscribe({
              next: function next(result) {}
            }); // retrieve general global data

            this.covidapi.retrieveGlobalDataFromFirestore().subscribe({
              next: function next(result) {
                //console.log(result);
                _this8.newConfirmedGlobal = result["newConfirmedGlobal"];
                _this8.newDeathsGlobal = result["newDeathsGlobal"];
                _this8.newRecoveredGlobal = result["newRecoveredGlobal"];
                _this8.totalRecoveredGlobal = result["totalRecoveredGlobal"];
                _this8.totalconfirmedGlobal = result["totalconfirmedGlobal"];
                _this8.totalDeathsGlobal = result['totalDeathsGlobal'];
                _this8.totalActiveGlobal = _this8.totalconfirmedGlobal - _this8.totalRecoveredGlobal - _this8.totalDeathsGlobal;
                console.log(_this8.totalActiveGlobal);
                _this8.recoveryRateGlobal = _this8.totalRecoveredGlobal / _this8.totalconfirmedGlobal;
                _this8.mortalityrateGlobal = _this8.totalDeathsGlobal / _this8.totalconfirmedGlobal;
                _this8.pieChartData = [_this8.totalDeathsGlobal, _this8.totalRecoveredGlobal, _this8.totalActiveGlobal];
              }
            }); // retrieve from last 7 days

            this.covidapi.retrieve7dayGlobalDataFromFirestore().subscribe({
              next: function next(result) {
                console.log(result);
                _this8.newConfirmedGlobal7days = result["newConfirmedGlobal"];
                _this8.newDeathsGlobal7days = result["newDeathsGlobal"];
                _this8.newRecoveredGlobal7days = result["newRecoveredGlobal"]; //this.totalActiveGlobal7days=this.totalconfirmedGlobal7days-this.totalRecoveredGlobal7days-this.totalDeathsGlobal7days;
                //console.log("total active 7 days global : !!!!!!!")
                //console.log(this.newRecoveredGlobal7days)
                // bar charts params

                _this8.barChartData = [{
                  data: _this8.newDeathsGlobal7days,
                  label: 'Daily deaths'
                }, {
                  data: _this8.newRecoveredGlobal7days,
                  label: 'new recovered'
                }, {
                  data: _this8.newConfirmedGlobal7days,
                  label: 'daily new cases'
                }]; //this.pieChartData=[this.totalDeathsGlobal,this.totalRecoveredGlobal,this.totalActiveGlobal]
              }
            });
            this.covidapi.retrieveFromBeginigDataFromFirestore().subscribe({
              next: function next(result) {
                //console.log(result);
                _this8.totalconfirmedGlobalFromBegining = result["totalconfirmedGlobal"];
                _this8.totalDeathsGlobalFromBegining = result["totalDeathsGlobal"];
                _this8.totalRecoveredGlobalFromBegining = result["totalRecoveredGlobal"]; //this.totalActiveGlobal7days=this.totalconfirmedGlobal7days-this.totalRecoveredGlobal7days-this.totalDeathsGlobal7days;
                //console.log("From  : !!!!!!!");
                //console.log(this.totalDeathsGlobalFromBegining);
                // bar charts params

                _this8.lineChartData = [{
                  data: _this8.totalDeathsGlobalFromBegining,
                  label: ' deaths'
                }, {
                  data: _this8.totalRecoveredGlobalFromBegining,
                  label: 'total recovered'
                }, {
                  data: _this8.totalconfirmedGlobalFromBegining,
                  label: 'total confirmed cases'
                }]; //this.pieChartData=[this.totalDeathsGlobal,this.totalRecoveredGlobal,this.totalActiveGlobal]
              }
            });
            /*
            ================================================================================================================
            start of second chalenge
            
            */
            // challenge 2 retrive the news

            this.covidapi.retrieveLegitimateUsersFromFirestoreAndCheckuser().subscribe({
              next: function next(result) {
                //console.log(JSON.parse(result[0]))
                console.log("legitimate users: ");
                _this8.legitimateUsers = result[0]; //console.log(this.legitimateUsers);
                // retrieve the user from local storage

                _this8.user = JSON.parse(localStorage.getItem("user"));
                var useremail = _this8.user["email"];
                console.log("my user :" + JSON.stringify(useremail)); // 3 to be adapted

                for (var key in _this8.legitimateUsers) {
                  console.log(key);
                  console.log(_this8.legitimateUsers);
                  var tmpmail = _this8.legitimateUsers[key];

                  if (tmpmail == useremail) {
                    _this8.legitimateBoolean = true;
                    console.log("legitimate user!!!!!!");
                  }
                }

                console.log("done 0"); // get the news

                _this8.covidapi.retrieveNewsFromFirestore().subscribe({
                  next: function next(result) {
                    _this8.news = Array(result)[0]["news"];
                    console.log(Array(result));
                  }
                });
              }
            }); //setTimeout(function(){this.testFunction(this.legitimateUsers) }, 3000);
          }
        }, {
          key: "updateNews",
          value: function updateNews(value) {
            var _this9 = this;

            console.log("entered news:" + value);

            if (this.legitimateBoolean == true) {
              console.log("success"); // send the news to firestore

              this.covidapi.updateNewsDataFirestore(value);
            } else {
              console.log("failure not allowed ");
            } // get the news


            this.covidapi.retrieveNewsFromFirestore().subscribe({
              next: function next(result) {
                _this9.news = Array(result)[0]["news"];
                console.log(Array(result));
              }
            });
          }
        }]);

        return CovidPageComponent;
      }();

      CovidPageComponent.ɵfac = function CovidPageComponent_Factory(t) {
        return new (t || CovidPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"]));
      };

      CovidPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CovidPageComponent,
        selectors: [["app-covid-page"]],
        decls: 113,
        vars: 27,
        consts: [[1, "text-center"], [1, "header"], ["src", "https://firebasestorage.googleapis.com/v0/b/expenses-67308.appspot.com/o/expenses.jpg?alt=media&token=595724b2-5124-4788-a6c9-4c0282c84f2c", "alt", "Expenses image", 2, "width", "10%"], [1, "table"], ["scope", "col"], ["scope", "row"], ["name", "piechart", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"], [2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "chart-line"], [1, "news"], [1, "news-list"], [4, "ngFor", "ngForOf"], [3, "keyup.enter"], ["box", ""], [1, "mx-auto", 2, "width", "100px"], ["type", "button", "routerLink", "/countries", 1, "btn", "btn-primary", "mt-4"]],
        template: function CovidPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Covid 19 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Live updates and statistics ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "New cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "active cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total Recovered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Recovered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Recovery rate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Total deaths ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "New deaths ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Mortality rate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Corona virus cases distribution worldwide");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "canvas", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "daily corona virus cases worldwide ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "canvas", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Total global cases from 13 april 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "canvas", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "The news : ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, CovidPageComponent_li_105_Template, 2, 1, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " enter news if u are allowed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CovidPageComponent_Template_input_keyup_enter_108_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](109);

              return ctx.updateNews(_r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Check specific countries ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("new Confirmed Globally:", ctx.newConfirmedGlobal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("new DeathsGlobally:", ctx.newDeathsGlobal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total Recovered Globally:", ctx.totalRecoveredGlobal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("total confirmed Globally:", ctx.totalconfirmedGlobal, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalconfirmedGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newConfirmedGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalActiveGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalRecoveredGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newRecoveredGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recoveryRateGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalDeathsGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.newDeathsGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mortalityrateGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdmlkLXBhZ2UvY292aWQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-covid-page',
            templateUrl: './covid-page.component.html',
            styleUrls: ['./covid-page.component.css']
          }]
        }], function () {
          return [{
            type: src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]
          }, {
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "9yJv":
    /*!********************************************************!*\
      !*** ./src/app/add-expenses/add-expenses.component.ts ***!
      \********************************************************/

    /*! exports provided: AddExpensesComponent */

    /***/
    function yJv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddExpensesComponent", function () {
        return AddExpensesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../expenses.service */
      "RYAx");

      var AddExpensesComponent = /*#__PURE__*/function () {
        function AddExpensesComponent(expensesService) {
          _classCallCheck(this, AddExpensesComponent);

          this.expensesService = expensesService;
        }

        _createClass(AddExpensesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddExpensesComponent;
      }();

      AddExpensesComponent.ɵfac = function AddExpensesComponent_Factory(t) {
        return new (t || AddExpensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]));
      };

      AddExpensesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddExpensesComponent,
        selectors: [["app-add-expenses"]],
        decls: 0,
        vars: 0,
        template: function AddExpensesComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1leHBlbnNlcy9hZGQtZXhwZW5zZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddExpensesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-expenses',
            templateUrl: './add-expenses.component.html',
            styleUrls: ['./add-expenses.component.css']
          }]
        }], function () {
          return [{
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebaseConfig: {
          apiKey: "AIzaSyC7m2NFqGeYh712SDyCSlj6LPdAJU7p4vc",
          authDomain: "covidprojectyouness.firebaseapp.com",
          databaseURL: "https://covidprojectyouness.firebaseio.com",
          projectId: "covidprojectyouness",
          storageBucket: "covidprojectyouness.appspot.com",
          messagingSenderId: "753154833642",
          appId: "1:753154833642:web:b9092f09531fdb4eadeb93",
          measurementId: "G-B9Z1EMPT5G"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "RYAx":
    /*!*************************************!*\
      !*** ./src/app/expenses.service.ts ***!
      \*************************************/

    /*! exports provided: ExpensesService */

    /***/
    function RYAx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensesService", function () {
        return ExpensesService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var ExpensesService = /*#__PURE__*/function () {
        function ExpensesService(afAuth, router, firestore) {
          _classCallCheck(this, ExpensesService);

          this.afAuth = afAuth;
          this.router = router;
          this.firestore = firestore;
          this.legitimateUsers = [];
        }

        _createClass(ExpensesService, [{
          key: "signInWithGoogle",
          value: function signInWithGoogle() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var credientals;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider());

                    case 2:
                      credientals = _context3.sent;
                      this.user = {
                        uid: credientals.user.uid,
                        displayName: credientals.user.displayName,
                        email: credientals.user.email
                      };
                      localStorage.setItem("user", JSON.stringify(this.user));
                      this.updateUserData();
                      this.router.navigate(["covid"]); // get legitimate users from firestore

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "updateUserData",
          value: function updateUserData() {
            this.firestore.collection("users").doc(this.user.uid).set({
              uid: this.user.uid,
              displayName: this.user.displayName,
              email: this.user.email
            }, {
              merge: true
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            if (this.user == null && this.userSignedIn()) {
              this.user = JSON.parse(localStorage.getItem("user"));
            }

            return this.user;
          }
        }, {
          key: "userSignedIn",
          value: function userSignedIn() {
            return JSON.parse(localStorage.getItem("user")) != null;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.afAuth.signOut();
            localStorage.removeItem("user");
            this.user = null;
            this.router.navigate(["signin"]);
          }
        }]);

        return ExpensesService;
      }();

      ExpensesService.ɵfac = function ExpensesService_Factory(t) {
        return new (t || ExpensesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]));
      };

      ExpensesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ExpensesService,
        factory: ExpensesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpensesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'expenses';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container", "my-5"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XMMn":
    /*!***************************************!*\
      !*** ./src/app/secure-pages.guard.ts ***!
      \***************************************/

    /*! exports provided: SecurePagesGuard */

    /***/
    function XMMn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurePagesGuard", function () {
        return SecurePagesGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./expenses.service */
      "RYAx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SecurePagesGuard = /*#__PURE__*/function () {
        function SecurePagesGuard(expensesService, router) {
          _classCallCheck(this, SecurePagesGuard);

          this.expensesService = expensesService;
          this.router = router;
        }

        _createClass(SecurePagesGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.expensesService.userSignedIn()) {
              this.router.navigate(["expenses"]);
            }

            return true;
          }
        }]);

        return SecurePagesGuard;
      }();

      SecurePagesGuard.ɵfac = function SecurePagesGuard_Factory(t) {
        return new (t || SecurePagesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      SecurePagesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SecurePagesGuard,
        factory: SecurePagesGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurePagesGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./signin/signin.component */
      "/hi3");
      /* harmony import */


      var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./expenses/expenses.component */
      "/8oZ");
      /* harmony import */


      var _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./add-expenses/add-expenses.component */
      "9yJv");
      /* harmony import */


      var _covid_page_covid_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./covid-page/covid-page.component */
      "8pcU");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./countries/countries.component */
      "wDil");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"], _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_9__["ExpensesComponent"], _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_10__["AddExpensesComponent"], _covid_page_covid_page_component__WEBPACK_IMPORTED_MODULE_11__["CovidPageComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__["CountriesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"], _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_9__["ExpensesComponent"], _add_expenses_add_expenses_component__WEBPACK_IMPORTED_MODULE_10__["AddExpensesComponent"], _covid_page_covid_page_component__WEBPACK_IMPORTED_MODULE_11__["CovidPageComponent"], _countries_countries_component__WEBPACK_IMPORTED_MODULE_14__["CountriesComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "tIkO":
    /*!*******************************!*\
      !*** ./src/app/auth.guard.ts ***!
      \*******************************/

    /*! exports provided: AuthGuard */

    /***/
    function tIkO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _expenses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./expenses.service */
      "RYAx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(expensesService, router) {
          _classCallCheck(this, AuthGuard);

          this.expensesService = expensesService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (!this.expensesService.userSignedIn()) {
              this.router.navigate(["signin"]);
            }

            return true;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _expenses_service__WEBPACK_IMPORTED_MODULE_1__["ExpensesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.guard */
      "tIkO");
      /* harmony import */


      var _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./expenses/expenses.component */
      "/8oZ");
      /* harmony import */


      var _secure_pages_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./secure-pages.guard */
      "XMMn");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signin/signin.component */
      "/hi3");
      /* harmony import */


      var _covid_page_covid_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./covid-page/covid-page.component */
      "8pcU");
      /* harmony import */


      var _countries_countries_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./countries/countries.component */
      "wDil");

      var routes = [{
        path: "signin",
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
        canActivate: [_secure_pages_guard__WEBPACK_IMPORTED_MODULE_4__["SecurePagesGuard"]]
      }, {
        path: "signout",
        component: _expenses_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: "covid",
        component: _covid_page_covid_page_component__WEBPACK_IMPORTED_MODULE_6__["CovidPageComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: "countries",
        component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_7__["CountriesComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: "",
        pathMatch: "full",
        redirectTo: "signin"
      }, {
        path: "covid",
        redirectTo: "covid"
      }, {
        path: "countries",
        redirectTo: "countries"
      }, {
        path: "**",
        redirectTo: "signout"
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wDil":
    /*!**************************************************!*\
      !*** ./src/app/countries/countries.component.ts ***!
      \**************************************************/

    /*! exports provided: CountriesComponent */

    /***/
    function wDil(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CountriesComponent", function () {
        return CountriesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/covid-api.service */
      "3Bkp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CountriesComponent_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var con_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", con_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](con_r4);
        }
      }

      function CountriesComponent_li_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var info_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", info_r5, " ");
        }
      }

      var CountriesComponent = /*#__PURE__*/function () {
        function CountriesComponent(covidapi) {
          _classCallCheck(this, CountriesComponent);

          this.covidapi = covidapi;
          this.countries = [];
          this.yesterdayDate = this.covidapi.getYesterdayDate() + "T00:00:00Z";
          this.result7days = {
            "Confirmed": [],
            "Active": [],
            "Deaths": [],
            "Recovered": []
          };
          this.pieChartLabels = ['Dead cases', 'Recovered cases', 'Active cases'];
          this.pieChartData = [0, 0, 1800];
          this.pieChartType = 'pie';
          this.country = "Uruguay"; //iniotial country

          this.legitimateBoolean = false;
          this.legitimateUsers = {}; // yesterday data

          this.active = 0;
          this.recovered = 0;
          this.deaths = 0;
          this.confirmed = 0; // total data from the begining

          this.totalActive = 0;
          this.totalRecovered = 0;
          this.totalDeaths = 0;
          this.totalConfirmed = 0; // 7 days data

          this.from7daysActive = 0;
          this.from7daysRecovered = 0;
          this.from7daysDeaths = 0;
          this.from7daysConfirmed = 0;
          this.stringdates = []; // bar data
          // bar chart global

          this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
          }; // to be changed

          this.barChartLabels = ['13 novembre', '12 novembre', '11 novembre', '10 novembre', '9 novembre', '8 novembre', '7 novembre'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = []; // news

          this.newsPerCountry = [];
        }

        _createClass(CountriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            // update bar chart
            this.updateBarCharLabel(); // get all countries

            this.covidapi.getAllCountries().subscribe({
              next: function next(result) {
                var jsonresult = JSON.parse(result); //console.log(jsonresult);

                for (var i = 0; i < jsonresult.length; i++) {
                  //console.log(jsonresult[i]);
                  _this10.countries.push(jsonresult[i]["Country"]);
                } // update firestore of all countries


                console.log("countries!!!!!");
                console.log(_this10.countries.length);
              }
            }); // adding string dates

            for (var i = 1; i < 8; i++) {
              var d = new Date(); // <- Get the current date

              d.setDate(d.getDate() - i);
              this.stringdates.push(this.covidapi.getDate(d) + "T00:00:00Z");
            } // ---------------------------------
            // news section
            //-------------------------------------------------------------


            this.covidapi.retrieveLegitimateUsersFromFirestoreAndCheckuser().subscribe({
              next: function next(result) {
                //console.log(JSON.parse(result[0]))
                //console.log("legitimate users: ");
                _this10.legitimateUsers = result[0]; //console.log(this.legitimateUsers);
                // retrieve the user from local storage

                _this10.user = JSON.parse(localStorage.getItem("user"));
                var useremail = _this10.user["email"];
                console.log("my user :" + JSON.stringify(useremail)); // 3 to be adapted

                for (var key in _this10.legitimateUsers) {
                  console.log(key);
                  console.log(_this10.legitimateUsers);
                  var tmpmail = _this10.legitimateUsers[key];

                  if (tmpmail == useremail) {
                    _this10.legitimateBoolean = true;
                    console.log("legitimate user!!!!!!");
                  }
                }
              }
            });
          } // send data to firestore

        }, {
          key: "updateValues",
          value: function updateValues(country) {
            var _this11 = this;

            console.log(country);
            this.country = country;
            this.covidapi.getDataPerCountry(country).subscribe({
              next: function next(result) {}
            });
            this.covidapi.retrievePerCountrylDataFromFirestore(this.country, this.yesterdayDate).subscribe({
              next: function next(result) {
                //console.log(result);
                //console.log(this.yesterdayDate)
                // console.log("updating value !!!!!!!!")
                //  console.log(result);
                if (result === undefined) {
                  _this11.retrieveDataDayBefore();
                } //console.log(JSON.parse(result["Active"]);
                // new active


                _this11.active = _this11.absoluteValue(result["Active"]);
                _this11.confirmed = result["Confirmed"];
                _this11.deaths = result["Deaths"];
                _this11.recovered = result["Recovered"]; //this.active=this.totalConfirmed-this.totalDeaths-this.totalRecovered;

                _this11.pieChartData = [_this11.deaths, _this11.recovered, _this11.active];
              }
            }); // news

            this.covidapi.retrieveNewsFromFirestorePerCountry(this.country).subscribe({
              next: function next(result) {
                if (typeof Array(result)[0] !== "undefined") {
                  _this11.newsPerCountry = Array(result)[0]["news"];
                  console.log(Array(result));
                } else {
                  _this11.newsPerCountry = [];
                }
              }
            }); // updating 7days value data

            this.result7days = {
              "Confirmed": [],
              "Active": [],
              "Deaths": [],
              "Recovered": []
            };

            var _iterator = _createForOfIteratorHelper(this.stringdates),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var mydate = _step.value;
                this.covidapi.retrievePerCountrylDataFromFirestore(this.country, mydate).subscribe(function (partial) {
                  //console.log("value for date"+mydate);
                  _this11.result7days["Confirmed"].push(parseInt(partial["Confirmed"]));

                  _this11.result7days["Active"].push(parseInt(partial["Active"]));

                  _this11.result7days["Deaths"].push(parseInt(partial["Deaths"]));

                  _this11.result7days["Recovered"].push(parseInt(partial["Recovered"])); // logging result7days
                  //console.log(this.result7days);

                });
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            setTimeout(function () {
              console.log("result7days " + JSON.stringify(_this11.result7days));
              _this11.barChartData = [{
                data: _this11.result7days["Deaths"],
                label: 'Daily deaths'
              }, {
                data: _this11.result7days["Recovered"],
                label: 'new recovered'
              }, {
                data: _this11.result7days["Confirmed"],
                label: 'daily new cases'
              }];
            }, 500); // get total data

            this.covidapi.getGlobalDataperCountry(this.country).subscribe({
              next: function next(result) {}
            });
            this.covidapi.retrievePerCountryTotalDataFromFirestore(this.country).subscribe({
              next: function next(result) {
                //console.log(result);
                //console.log(result);
                //console.log(JSON.parse(result["Active"]);
                _this11.totalConfirmed = result["totalconfirmed"];
                _this11.totalDeaths = result["totalDeaths"];
                _this11.totalRecovered = result["totalRecovered"]; //this.active=this.totalConfirmed-this.totalDeaths-this.totalRecovered;

                _this11.mortalityrateGlobal = _this11.totalDeaths / _this11.totalConfirmed;
                _this11.recoveryRateGlobal = _this11.totalRecovered / _this11.totalConfirmed; //console.log("Total active"+this.totalActive.toString());
              }
            });
          }
        }, {
          key: "updateNewsPerCountry",
          value: function updateNewsPerCountry(value) {
            var _this12 = this;

            console.log("entered news:" + value);

            if (this.legitimateBoolean == true) {
              console.log("success"); // send the news to firestore

              this.covidapi.updateNewsDataFirestorePerCountry(this.country, value, this.newsPerCountry);
            } else {
              console.log("failure not allowed ");
            } // get the news another time


            this.covidapi.retrieveNewsFromFirestorePerCountry(this.country).subscribe({
              next: function next(result) {
                _this12.newsPerCountry = Array(result)[0]["news"];
                console.log(Array(result));
              }
            });
          }
        }, {
          key: "retrieveDataDayBefore",
          value: function retrieveDataDayBefore() {
            var _this13 = this;

            console.log("data for today isn't available "); // retrieve data of previous day

            this.covidapi.retrievePerCountrylDataFromFirestore(this.country, this.covidapi.getDayBeforeN(2) + "T00:00:00Z").subscribe({
              next: function next(result) {
                //console.log(result);
                //console.log(this.yesterdayDate)
                console.log("updating value 2 !!!!!!!!");
                console.log(result);
                console.log(result["Active"]);
                _this13.active = _this13.absoluteValue(result["Active"]); // new active

                _this13.confirmed = result["Confirmed"];
                _this13.deaths = result["Deaths"];
                _this13.recovered = result["Recovered"];
                _this13.pieChartData = [_this13.deaths, _this13.recovered, _this13.active];
              }
            });
          }
        }, {
          key: "updateBarCharLabel",
          value: function updateBarCharLabel() {
            for (var i = 0; i < this.barChartLabels.length; i++) {
              this.barChartLabels[i] = this.covidapi.getDayBeforeN(i + 1);
            }

            this.barChartLabels.reverse(); //console.log(this.barChartLabels);
          }
        }, {
          key: "absoluteValue",
          value: function absoluteValue(n) {
            if (n > 0) {
              return n;
            } else {
              return -n;
            }
          }
        }]);

        return CountriesComponent;
      }();

      CountriesComponent.ɵfac = function CountriesComponent_Factory(t) {
        return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]));
      };

      CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CountriesComponent,
        selectors: [["app-countries"]],
        decls: 99,
        vars: 20,
        consts: [[1, "mx-auto"], [1, "form-group", "col-lg-5", "mx-auto"], ["for", "c"], ["name", "", "id", "c", 1, "form-control", 3, "change"], ["input", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "table"], ["scope", "col"], ["scope", "row"], ["name", "piechart", 2, "display", "block"], ["baseChart", "", 3, "data", "labels", "chartType"], [2, "display", "block"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType"], [1, "news"], [3, "keyup.enter"], ["box", ""], [1, "news-list"], [4, "ngFor", "ngForOf"], [3, "value"]],
        template: function CountriesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Countries Page ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CountriesComponent_Template_select_change_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              return ctx.updateValues(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CountriesComponent_option_8_Template, 2, 2, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Total cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "New cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "active cases");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Total Recovered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "New Recovered");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Recovery rate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Total deaths ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "New deaths ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Mortalityrate ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Corona virus per country");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "canvas", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "daily corona virus cases worldwide ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "canvas", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " enter news if u are allowed: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function CountriesComponent_Template_input_keyup_enter_95_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

              return ctx.updateNewsPerCountry(_r2.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, CountriesComponent_li_98_Template, 2, 1, "li", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalConfirmed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.active);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalRecovered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recovered);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recoveryRateGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalDeaths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.deaths);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mortalityrateGlobal);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.pieChartData)("labels", ctx.pieChartLabels)("chartType", ctx.pieChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("News for the country : ", ctx.country, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsPerCountry);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cmllcy9jb3VudHJpZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountriesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-countries',
            templateUrl: './countries.component.html',
            styleUrls: ['./countries.component.css']
          }]
        }], function () {
          return [{
            type: src_app_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map