(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\arthu\Documents\GitHub\financial-planning\src\main.ts */"zUnb");


/***/ }),

/***/ "0PS2":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainPageComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 57, vars: 0, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "icon-set"], [1, "icon-item"], [1, "icon-item", "last"], [1, "clearfix"], [1, "budget-content"], ["id", "resources"], [1, "component-menu-list"], [1, "item-list"], ["routerLink", "budget", 3, "click"], [1, "title"], ["src", "../../assets/money.png", "alt", "money icon", 1, "card-icon"], [1, "item"], ["routerLink", "networth", 3, "click"], ["src", "../../assets/piggy-bank.png", "alt", "money icon", 1, "card-icon"], ["routerLink", "credit-cards", 3, "click"], ["src", "../../assets/credit.png", "alt", "money icon", 1, "card-icon"], ["routerLink", "bank-accounts", 3, "click"], ["src", "../../assets/bank.png", "alt", "money icon", 1, "card-icon"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u201CThe most important investment you can make is in yourself.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Warren Buffet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create a Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Knowing how you're spending your money and where your money goes is essential for financial literacy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Set Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Creating smaller milestone goals can help you stay motivated and stay on track for your major goal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stick To The Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Create the mentality of saving first and make it a habit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_34_listener() { return ctx.setTitle("Arthur Figueiredo | Budget Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_40_listener() { return ctx.setTitle("Arthur Figueiredo | Net Worth Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Networth Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_46_listener() { return ctx.setTitle("Arthur Figueiredo | Credit Card Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Credit Cards Picks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_52_listener() { return ctx.setTitle("Arthur Figueiredo | Bank Account Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Bank Account Picks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('main-banner.jpg');\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #4c00ff, #0000c0);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #0000c0, #4f017c);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #4f017c, #8503a5);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #8503a5, #9e019e);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxrRkFBQTtBQTJCUjtFQUNFLFdBQUE7RUFDQSxpQkFkVztFQWVYLGNBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRHNDQTtFQUNFLFdBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkF0Q1c7RUF1Q1gsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBOUNXO0VBK0NYLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7QUNwQ0Y7QURxQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ25DSjtBRDdCSTtFQTRERjtJQU1JLFVBQUE7SUFDQSxrQkFBQTtFQ2pDSjtBQUNGO0FEbUNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDakNSO0FEb0NJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNsQ047QURvQ0k7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDbENOO0FEb0NJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDbENOO0FEdUNBO0VBQ0UsV0FBQTtBQ3BDRjtBRHVDQTtFQUNFLG1CQUFBO0FDcENGO0FEdUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDcENGO0FEdUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3BDRjtBRHVDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQTlHVztFQStHWCxVQUFBO0FDcENGO0FEdUNBO0VBRUUsYUFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLCtDQUFBO0VBQ0Esa0NBQUE7RUFFQSxxQkFBQTtBQ3ZDRjtBRDRDQTs7RUFFRSxzQkFBQTtFQUNBLGtDQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDekNGO0FENENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekNGO0FENENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDekNGO0FENENBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDekNGO0FENENBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDekNGO0FENENBO0VBQ0UsaUJBOU9XO0FDcU1iO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ3pDRjtFRDBDRTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtFQ3hDSjtFRHlDSTtJQUNFLHdCQUFBO0VDdkNOO0VEd0NNO0lBQ0UsY0FBQTtFQ3RDUjtFRHlDTTtJQUNFLHFCQUFBO0VDdkNSOztFRDZDQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxVQUFBO0VDMUNGOztFRDZDQTtJQUNFLGtCQUFBO0VDMUNGO0FBQ0Y7QUQ4Q0U7RUFDRSxpQkFBQTtBQzVDSjtBRGdEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQzdDRjtBRGdEQTtFQUVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUM5Q0Y7O0VEaURBO0lBQ0Usb0JBQUE7RUM5Q0Y7QUFDRjtBRGlEQTtFQUNFO0lBQ0UsbUJBQUE7RUMvQ0Y7QUFDRjtBQTlSQTtFQUNFLGdCQUFBO0FBZ1NGO0FBNVJFO0VBQ0UsbUJBQUE7QUErUko7QUEzUkE7RUFDRSx3Q0FBQTtBQThSRjtBQTFSRTtFQUNFLG1FQUFBO0FBNlJKO0FBeFJFO0VBQ0Usb0RBQUE7QUEyUko7QUF0UkU7RUFDRSxvREFBQTtBQXlSSjtBQXBSRTtFQUNFLG9EQUFBO0FBdVJKO0FBbFJFO0VBQ0Usb0RBQUE7QUFxUkoiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbik7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJHBhZ2Utd2lkdGg6IDExNDBweDtcclxuJHByaW1hcnktY29sb3I6ICMxOUQ0REU7XHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzM5MDA7XHJcbiRsaWdodC1yZWQ6ICNmZmU1ZTM7XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwdXJwbGU7XHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG59XHJcbiAgXHJcbi5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbiAgLmljb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41ZW07XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50IChtZWRpdW0pIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAubG5yIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEsIHAgIHtcclxuICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudSBoZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206ODBweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgze1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICBmb250LXNpemU6MThweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgbWF4LXdpZHRoOjQ2MHB4O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLWxpc3Qge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QgbGkge1xyXG4gIC8vIHdpZHRoOiAyNjVweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjowIDEwcHg7XHJcbn0gXHJcblxyXG4uaXRlbS1saXN0IGxpIGEge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MjY3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gIHBhZGRpbmc6MzVweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIFxyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4uaXRlbS1saXN0IGxpIGE6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxufVxyXG4gIFxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuLmRvbWFpbi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTozNXB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBmb250LXNpemU6MjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6MzJweDtcclxufVxyXG5cclxuLml0ZW0gc3BhbiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LXdlaWdodDpub3JtYWw7ICAgIFxyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uYnRuIGkge1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIG1hcmdpbi1sZWZ0O1xyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjODA4MEI5O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG59XHJcblxyXG4uYWN0aW9uIGE6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7ICAgXHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxufVxyXG5cclxuI3F1b3RlIHtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA0NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICAgICAgIFxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7ICAgICBcclxuICB9XHJcbn1cclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4jcmVzb3VyY2VzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAkcGFnZS13aWR0aC81MDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuIFxyXG4gIC5idWRnZXQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjcmVzb3VyY2VzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xuICAuaWNvbi1zZXQgLmljb24taXRlbSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIC5pY29uLWNvbnRhaW5lciAubG5yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEsIC5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxIHtcbiAgbWFyZ2luOiAxZW0gMCAwLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb21wb25lbnQtbWVudSBoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDMge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWF4LXdpZHRoOiA0NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLml0ZW0tbGlzdCBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDMwMG1zIGJhY2tncm91bmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXG4uaXRlbS1saXN0IGxpIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kb21haW4tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIG1hcmdpbi1sZWZ0O1xufVxuXG4uYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9uIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE4cHggNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzgwODBCOTtcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xufVxuXG4uYWN0aW9uIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogMTE0MHB4O1xufVxuXG4jcXVvdGUge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gICAgcGFkZGluZzogNTBweCAxNXB4O1xuICB9XG59XG4uYnVkZ2V0LWNvbnRlbnQgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Jlc291cmNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIyLjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgI3Jlc291cmNlcyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgI3Jlc291cmNlcyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxufVxuaDEge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uYmFubmVyLXRleHQgaDEge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluLWJhbm5lci5qcGdcIik7XG59XG5cbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDEpIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMCwgMTM2LCAwLjc3NCksICM0YzAwZmYpO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCgyKSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjNGMwMGZmLCAjMDAwMGMwKTtcbn1cblxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoMykgYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgIzAwMDBjMCwgIzRmMDE3Yyk7XG59XG5cbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDQpIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsICM0ZjAxN2MsICM4NTAzYTUpO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCg1KSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjODUwM2E1LCAjOWUwMTllKTtcbn0iXX0= */"] });


/***/ }),

/***/ "4Niy":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class SidenavListComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = () => {
            this.sidenavClose.emit();
        };
    }
    ngOnInit() {
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
SidenavListComponent.ɵfac = function SidenavListComponent_Factory(t) { return new (t || SidenavListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
SidenavListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavListComponent, selectors: [["app-sidenav-list"]], outputs: { sidenavClose: "sidenavClose" }, decls: 26, vars: 0, consts: [["mat-list-item", "", "routerLink", "/", 3, "click"], [1, "nav-caption"], ["mat-list-item", "", "routerLink", "budget", 3, "click"], ["mat-list-item", "", "routerLink", "networth", 3, "click"], ["mat-list-item", "", "routerLink", "credit-cards", 3, "click"], ["mat-list-item", "", "routerLink", "bank-accounts", 3, "click"]], template: function SidenavListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_1_listener() { ctx.onSidenavClose(); return ctx.setTitle("Arthur Figueiredo | Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_6_listener() { ctx.onSidenavClose(); return ctx.setTitle("Arthur Figueiredo | Budget Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "account_balance_wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_11_listener() { ctx.onSidenavClose(); return ctx.setTitle("Arthur Figueiredo | Networth Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "paid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Net Worth Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_16_listener() { ctx.onSidenavClose(); return ctx.setTitle("Arthur Figueiredo | Credit Card Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "credit_card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Credit Card Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavListComponent_Template_a_click_21_listener() { ctx.onSidenavClose(); return ctx.setTitle("Arthur Figueiredo | Bank Account Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "account_balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bank Account Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.nav-caption[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic2lkZW5hdi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLm5hdi1jYXB0aW9ue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "6nXz":
/*!************************************************!*\
  !*** ./src/app/networth/networth.component.ts ***!
  \************************************************/
/*! exports provided: NetworthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworthComponent", function() { return NetworthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../budget-item-list/budget-item-list.component */ "f0T3");


class NetworthComponent {
    constructor() {
        this.isBudget = false;
    }
    ngOnInit() {
    }
}
NetworthComponent.ɵfac = function NetworthComponent_Factory(t) { return new (t || NetworthComponent)(); };
NetworthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NetworthComponent, selectors: [["app-networth"]], decls: 76, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "budget-content"], [1, "top-bar", "budget-content"], [3, "isBudget"], [1, "budget-content", "table-responsive"], [1, "table", "table-striped", "table-hover"], ["href", "https://www.bankrate.com/personal-finance/average-net-worth-by-age/"], [1, "thead-light"], ["scope", "col"]], template: function NetworthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u201CFinancial freedom is less about financials and more about freedom.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manoj Arora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What is Net Worth & How to Calculate Yours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Net Worth if the result of you subtracting your liabilities (loans, credit card balances, mortgage, etc.) from your assets (your house, checking and savings account balances, investment balance, etc.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Knowing your net worth is important so you can know where you stand financially. Even though it is interesting to compare your net worth to the average person, please understand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "the goal is to always to try and be better than your previous self, not others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Net Worth Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-budget-item-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This is the average and median net worth in the U.S by age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Remember, you should only strive to be better than your previous self, but knowing the average and median for your age group in the U.S can help you have an idea of where you stand right now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Data used from the Bankrate.com article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Median");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "20s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "$56,984");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "$6,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "30s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "$174,002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "$32,600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "40s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "$457,783");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "$93,460");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "50s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "$998,416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "$152,400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "60s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$1,121,534");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "$221,200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBudget", ctx.isBudget);
    } }, directives: [_budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_1__["BudgetItemListComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  height: 68px;\n  margin: 0 auto;\n  margin-top: 25px;\n  display: flex;\n  align-items: center;\n}\ntable[_ngcontent-%COMP%] {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('networth-banner.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5ldHdvcnRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLGtGQUFBO0FBMkJSO0VBQ0UsV0FBQTtFQUNBLGlCQWRXO0VBZVgsY0FBQTtFQUNBLGdCQUFBO0FDMUJGO0FEc0NBO0VBQ0UsV0FBQTtBQ25DRjtBRHNDQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQXRDVztFQXVDWCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ25DRjtBRHNDQTtFQUNFLGNBQUE7RUFDQSxpQkE5Q1c7RUErQ1gsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtBQ3BDRjtBRHFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkNKO0FEN0JJO0VBNERGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0VDakNKO0FBQ0Y7QURtQ007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNqQ1I7QURvQ0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ2xDTjtBRG9DSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNsQ047QURvQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNsQ047QUR1Q0E7RUFDRSxXQUFBO0FDcENGO0FEdUNBO0VBQ0UsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcENGO0FEdUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBOUdXO0VBK0dYLFVBQUE7QUNwQ0Y7QUR1Q0E7RUFFRSxhQUFBO0VBQ0EsY0FBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDdkNGO0FENENBOztFQUVFLHNCQUFBO0VBQ0Esa0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDekNGO0FENENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDekNGO0FENENBO0VBQ0UsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkE5T1c7QUNxTWI7QUQ0Q0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekNGO0FENENBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDekNGO0VEMENFO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDeENKO0VEeUNJO0lBQ0Usd0JBQUE7RUN2Q047RUR3Q007SUFDRSxjQUFBO0VDdENSO0VEeUNNO0lBQ0UscUJBQUE7RUN2Q1I7O0VENkNBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLFVBQUE7RUMxQ0Y7O0VENkNBO0lBQ0Usa0JBQUE7RUMxQ0Y7QUFDRjtBRDhDRTtFQUNFLGlCQUFBO0FDNUNKO0FEZ0RBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDN0NGO0FEZ0RBO0VBRUU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzlDRjs7RURpREE7SUFDRSxvQkFBQTtFQzlDRjtBQUNGO0FEaURBO0VBQ0U7SUFDRSxtQkFBQTtFQy9DRjtBQUNGO0FBOVJBO0VBQ0ksV0FBQTtFQUNBLGlCRFlTO0VDWFQsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtBQStSSjtBQTVSQTtFQUNJLGtCQUFBO0FBK1JKO0FBN1JJO0VBQ0ksa0JBQUE7QUErUlI7QUE1Ukk7RUFDSSxnQkFBQTtBQThSUjtBQTFSQTtFQUNJLDRDQUFBO0FBNlJKIiwiZmlsZSI6Im5ldHdvcnRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbik7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuJHBhZ2Utd2lkdGg6IDExNDBweDtcclxuJHByaW1hcnktY29sb3I6ICMxOUQ0REU7XHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzM5MDA7XHJcbiRsaWdodC1yZWQ6ICNmZmU1ZTM7XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwdXJwbGU7XHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi5jYXJkLWljb24ge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG59XHJcbiAgXHJcbi5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XHJcbiAgLmljb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41ZW07XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50IChtZWRpdW0pIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAubG5yIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEsIHAgIHtcclxuICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudSBoZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206ODBweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgze1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICBmb250LXNpemU6MThweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgbWF4LXdpZHRoOjQ2MHB4O1xyXG4gIG1hcmdpbjowIGF1dG87XHJcbn1cclxuXHJcbi5pdGVtLWxpc3Qge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QgbGkge1xyXG4gIC8vIHdpZHRoOiAyNjVweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjowIDEwcHg7XHJcbn0gXHJcblxyXG4uaXRlbS1saXN0IGxpIGEge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6MjY3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gIHBhZGRpbmc6MzVweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIFxyXG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiAgXHJcbiAgXHJcbiAgXHJcbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4uaXRlbS1saXN0IGxpIGE6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxufVxyXG4gIFxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZToyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuLmRvbWFpbi10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTozNXB4O1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICBmb250LXNpemU6MjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6MzJweDtcclxufVxyXG5cclxuLml0ZW0gc3BhbiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBmb250LXNpemU6MTZweDtcclxuICBmb250LXdlaWdodDpub3JtYWw7ICAgIFxyXG59XHJcblxyXG4uYnRuIHtcclxuICBmb250LXNpemU6MTZweDtcclxuICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG4uYnRuIGkge1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIG1hcmdpbi1sZWZ0O1xyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbiBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjODA4MEI5O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG59XHJcblxyXG4uYWN0aW9uIGE6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7ICAgXHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxufVxyXG5cclxuI3F1b3RlIHtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA0NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gICAgICAgIFxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7ICAgICBcclxuICB9XHJcbn1cclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4jcmVzb3VyY2VzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAkcGFnZS13aWR0aC81MDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuIFxyXG4gIC5idWRnZXQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAjcmVzb3VyY2VzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcclxuICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xuICAuaWNvbi1zZXQgLmljb24taXRlbSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIC5pY29uLWNvbnRhaW5lciAubG5yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEsIC5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxIHtcbiAgbWFyZ2luOiAxZW0gMCAwLjI1ZW07XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5jb21wb25lbnQtbWVudSBoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDMge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWF4LXdpZHRoOiA0NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLml0ZW0tbGlzdCBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDMwMG1zIGJhY2tncm91bmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXG4uaXRlbS1saXN0IGxpIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kb21haW4tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIG1hcmdpbi1sZWZ0O1xufVxuXG4uYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9uIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE4cHggNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzgwODBCOTtcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xufVxuXG4uYWN0aW9uIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogMTE0MHB4O1xufVxuXG4jcXVvdGUge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxuXG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gICAgcGFkZGluZzogNTBweCAxNXB4O1xuICB9XG59XG4uYnVkZ2V0LWNvbnRlbnQgaDEge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI3Jlc291cmNlcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDIyLjhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgI3Jlc291cmNlcyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgI3Jlc291cmNlcyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbiAgfVxufVxuLnRvcC1iYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGhlaWdodDogNjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdGgge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG50YWJsZSB0ZCB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL25ldHdvcnRoLWJhbm5lci5qcGdcIik7XG59Il19 */"] });


/***/ }),

/***/ "8Ynw":
/*!*********************************************************************************!*\
  !*** ./src/app/budget-item-list/budget-item-card/budget-item-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BudgetItemCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemCardComponent", function() { return BudgetItemCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _budget_item_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../budget-item-list.component */ "f0T3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





function BudgetItemCardComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.item.amount));
} }
function BudgetItemCardComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.item.amount * -1));
} }
function BudgetItemCardComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onXButtonClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "income": a0, "expense": a1 }; };
class BudgetItemCardComponent {
    constructor(_budgetItemList) {
        this._budgetItemList = _budgetItemList;
        this.isPos = true;
        this.mobile = false;
        this.xButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (window.screen.width <= 850) {
            this.mobile = true;
        }
    }
    onXButtonClick() {
        this.xButtonClick.emit();
    }
    onCardClick() {
        this.cardClick.emit();
    }
    deleteBtnClicked() {
        this._budgetItemList.onDeleteButtonClicked(this.item);
    }
    editBtnClicked() {
        this._budgetItemList.onCardClicked(this.item);
    }
}
BudgetItemCardComponent.ɵfac = function BudgetItemCardComponent_Factory(t) { return new (t || BudgetItemCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_budget_item_list_component__WEBPACK_IMPORTED_MODULE_1__["BudgetItemListComponent"])); };
BudgetItemCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetItemCardComponent, selectors: [["app-budget-item-card"]], inputs: { item: "item", isPos: "isPos" }, outputs: { xButtonClick: "xButtonClick", cardClick: "cardClick" }, decls: 14, vars: 8, consts: [[1, "root"], [1, "budget-item", 3, "ngClass", "click"], [1, "description"], [1, "amount"], [4, "ngIf"], [1, "mobile-functionality"], [1, "edit", 3, "click"], ["src", "../../../assets/edit.png", "alt", "Edit Button", "id", "edit"], [1, "remove", 3, "click"], ["src", "../../../assets/delete.png", "alt", "Edit Button", "id", "edit"], ["class", "x-icon-button", 3, "click", 4, "ngIf"], [1, "x-icon-button", 3, "click"]], template: function BudgetItemCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_Template_div_click_1_listener() { return ctx.onCardClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BudgetItemCardComponent_span_6_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BudgetItemCardComponent_span_7_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_Template_span_click_9_listener() { return ctx.editBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetItemCardComponent_Template_span_click_11_listener() { return ctx.deleteBtnClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BudgetItemCardComponent_div_13_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.item.amount >= 0, ctx.item.amount < 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.root[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n.root[_ngcontent-%COMP%]:hover   .x-icon-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  background: #161c29;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  right: -17px;\n  top: -17px;\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n  transform: scale(0);\n  opacity: 0;\n  cursor: pointer;\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.budget-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in;\n}\n.budget-item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.budget-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 18px;\n  margin-left: 5px;\n  align-items: center;\n}\n.budget-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 3px;\n}\n.expense[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n.expense[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #ffe5e3;\n}\n.income[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.income[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #bafacd;\n}\n#edit[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.mobile-functionality[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 800px) {\n  .mobile-functionality[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    margin-top: 5px;\n  }\n  .mobile-functionality[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 7.5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJ1ZGdldC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esa0ZBQUE7QUEyQlI7RUFDRSxXQUFBO0VBQ0EsaUJBZFc7RUFlWCxjQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QURzQ0E7RUFDRSxXQUFBO0FDbkNGO0FEc0NBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBdENXO0VBdUNYLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDbkNGO0FEc0NBO0VBQ0UsY0FBQTtFQUNBLGlCQTlDVztFQStDWCxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0FDcENGO0FEcUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuQ0o7QUQ3Qkk7RUE0REY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7RUNqQ0o7QUFDRjtBRG1DTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2pDUjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDbENOO0FEb0NJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ2xDTjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2xDTjtBRHVDQTtFQUNFLFdBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkE5R1c7RUErR1gsVUFBQTtBQ3BDRjtBRHVDQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0FDckNGO0FEd0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QUN2Q0Y7QUQ0Q0E7O0VBRUUsc0JBQUE7RUFDQSxrQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDekNGO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQTlPVztBQ3FNYjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUN6Q0Y7RUQwQ0U7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUN4Q0o7RUR5Q0k7SUFDRSx3QkFBQTtFQ3ZDTjtFRHdDTTtJQUNFLGNBQUE7RUN0Q1I7RUR5Q007SUFDRSxxQkFBQTtFQ3ZDUjs7RUQ2Q0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsVUFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGO0FEOENFO0VBQ0UsaUJBQUE7QUM1Q0o7QURnREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUM3Q0Y7QURnREE7RUFFRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDOUNGOztFRGlEQTtJQUNFLG9CQUFBO0VDOUNGO0FBQ0Y7QURpREE7RUFDRTtJQUNFLG1CQUFBO0VDL0NGO0FBQ0Y7QUE5UkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBZ1NKO0FBN1JRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBK1JaO0FBM1JJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJEQ0Q7RUNBQyx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQTRSUjtBQTFSUTtFQUNJLHFCQUFBO0FBNFJaO0FBdlJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkRyQlM7RUNzQlQsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHlDQUFBO0FBeVJKO0FBeFJJO0VBQ0kseUJBQUE7QUEwUlI7QUF2Ukk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLG1CQUFBO0FBdVJSO0FBcFJJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBc1JSO0FBalJJO0VBQ0ksY0QzQ0Y7QUMrVE47QUFqUkk7RUFDSSx5QkQ5Q0k7QUNpVVo7QUEvUUk7RUFDSSxjRHZEQTtBQ3lVUjtBQS9RSTtFQUNJLHlCRDFETTtBQzJVZDtBQTdRQTtFQUNJLFdBQUE7QUFnUko7QUE3UUE7RUFDSSxhQUFBO0FBZ1JKO0FBN1FBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBZ1JOO0VBOVFNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtFQWdSVjtBQUNGIiwiZmlsZSI6ImJ1ZGdldC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcInV0Zi04XCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKTtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kcGFnZS13aWR0aDogMTE0MHB4O1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMzkwMDtcclxuJGxpZ2h0LXJlZDogI2ZmZTVlMztcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAuaWNvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKG1lZGl1bSkge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSwgcCAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDN7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6MjJweDtcclxuICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLml0ZW0tbGlzdCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaSB7XHJcbiAgLy8gd2lkdGg6IDI2NXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxufSBcclxuXHJcbi5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgcGFkZGluZzozNXB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4uZG9tYWluLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDozMnB4O1xyXG59XHJcblxyXG4uaXRlbSBzcGFuIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDsgICAgXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5idG4gaSB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MDgwQjk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbn1cclxuXHJcbi5hY3Rpb24gYTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG59XHJcblxyXG4jcXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgICAgICAgXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweDsgICAgIFxyXG4gIH1cclxufVxyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbiNyZXNvdXJjZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6ICRwYWdlLXdpZHRoLzUwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMFwiKTtcbi5idWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xufVxuXG4uaWNvbi1zZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSwgLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEge1xuICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRvbWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbWFyZ2luLWxlZnQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MEI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XG59XG5cbi5hY3Rpb24gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59XG5cbiNxdW90ZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5idWRnZXQtY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcmVzb3VyY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMjIuOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB9XG59XG4ucm9vdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm9vdDpob3ZlciAueC1pY29uLWJ1dHRvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4ucm9vdCAueC1pY29uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMTYxYzI5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZGVsZXRlX2ljb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHJpZ2h0OiAtMTdweDtcbiAgdG9wOiAtMTdweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4sIHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb290IC54LWljb24tYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG4uYnVkZ2V0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluO1xufVxuLmJ1ZGdldC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5idWRnZXQtaXRlbSAuZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idWRnZXQtaXRlbSAuYW1vdW50IHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5leHBlbnNlIHAge1xuICBjb2xvcjogI2RjMzkwMDtcbn1cbi5leHBlbnNlIC5hbW91bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWUzO1xufVxuXG4uaW5jb21lIHAge1xuICBjb2xvcjogIzAwY2M4Njtcbn1cbi5pbmNvbWUgLmFtb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWZhY2Q7XG59XG5cbiNlZGl0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5tb2JpbGUtZnVuY3Rpb25hbGl0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1vYmlsZS1mdW5jdGlvbmFsaXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5tb2JpbGUtZnVuY3Rpb25hbGl0eSAuZWRpdCB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNy41cHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "8a+g":
/*!************************************************************!*\
  !*** ./src/app/footer-content/footer-content.component.ts ***!
  \************************************************************/
/*! exports provided: FooterContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterContentComponent", function() { return FooterContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterContentComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterContentComponent.ɵfac = function FooterContentComponent_Factory(t) { return new (t || FooterContentComponent)(); };
FooterContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterContentComponent, selectors: [["app-footer-content"]], decls: 9, vars: 1, consts: [[1, "disclosure", "budget-content"], [1, "copyright"]], template: function FooterContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editorial Note: Opinions expressed here are the author's alone, not those of any bank, credit card issuer, airlines or hotel chain, vendors or companies, and have not been reviewed, approved, or otherwise endorsed by any of these entities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disclaimer: Content on this page represents one individual\u2019s experiences and viewpoints, and your experience may differ. The owner of this site is not an investment advisor, financial planner, nor a legal or tax professional. Articles here are of an opinion and general nature and should not be relied upon for individual circumstances. Research and obtain professional advice regarding all credit decisions before attempting to duplicate any of the techniques described on this website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " Arthur Figueiredo. All rights reserved.");
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.disclosure[_ngcontent-%COMP%] {\n  max-width: 1140px;\n  justify-content: center;\n  margin: 0 auto;\n}\n.copyright[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  max-width: 1140px;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGZvb3Rlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLGtGQUFBO0FBMkJSO0VBQ0UsV0FBQTtFQUNBLGlCQWRXO0VBZVgsY0FBQTtFQUNBLGdCQUFBO0FDMUJGO0FEc0NBO0VBQ0UsV0FBQTtBQ25DRjtBRHNDQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQXRDVztFQXVDWCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ25DRjtBRHNDQTtFQUNFLGNBQUE7RUFDQSxpQkE5Q1c7RUErQ1gsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtBQ3BDRjtBRHFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkNKO0FEN0JJO0VBNERGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0VDakNKO0FBQ0Y7QURtQ007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNqQ1I7QURvQ0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ2xDTjtBRG9DSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNsQ047QURvQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNsQ047QUR1Q0E7RUFDRSxXQUFBO0FDcENGO0FEdUNBO0VBQ0UsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcENGO0FEdUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBOUdXO0VBK0dYLFVBQUE7QUNwQ0Y7QUR1Q0E7RUFFRSxhQUFBO0VBQ0EsY0FBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDdkNGO0FENENBOztFQUVFLHNCQUFBO0VBQ0Esa0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDekNGO0FENENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDekNGO0FENENBO0VBQ0UsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkE5T1c7QUNxTWI7QUQ0Q0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekNGO0FENENBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDekNGO0VEMENFO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDeENKO0VEeUNJO0lBQ0Usd0JBQUE7RUN2Q047RUR3Q007SUFDRSxjQUFBO0VDdENSO0VEeUNNO0lBQ0UscUJBQUE7RUN2Q1I7O0VENkNBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLFVBQUE7RUMxQ0Y7O0VENkNBO0lBQ0Usa0JBQUE7RUMxQ0Y7QUFDRjtBRDhDRTtFQUNFLGlCQUFBO0FDNUNKO0FEZ0RBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDN0NGO0FEZ0RBO0VBRUU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzlDRjs7RURpREE7SUFDRSxvQkFBQTtFQzlDRjtBQUNGO0FEaURBO0VBQ0U7SUFDRSxtQkFBQTtFQy9DRjtBQUNGO0FBOVJBO0VBQ0ksaUJEYVM7RUNaVCx1QkFBQTtFQUNBLGNBQUE7QUFnU0o7QUE3UkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsaUJER1M7RUNGVCxxQkFBQTtBQStSSiIsImZpbGUiOiJmb290ZXItY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwidXRmLThcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDAnKTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gICdzbWFsbCc6ICA3NjdweCxcclxuICAnbWVkaXVtJzogODIwcHgsXHJcbiAgJ2xhcmdlJzogIDEyMDBweFxyXG4pO1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiRwYWdlLXdpZHRoOiAxMTQwcHg7XHJcbiRwcmltYXJ5LWNvbG9yOiAjMTlENERFO1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG4gIFxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xyXG59XHJcblxyXG4uaWNvbi1zZXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgLmxuciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIC4yNWVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICBmb250LXNpemU6MjZweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBsaW5lLWhlaWdodDoyMnB4O1xyXG4gIG1heC13aWR0aDo0NjBweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IGxpIHtcclxuICAvLyB3aWR0aDogMjY1cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46MCAxMHB4O1xyXG59IFxyXG5cclxuLml0ZW0tbGlzdCBsaSBhIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjI2N3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBwYWRkaW5nOjM1cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgYmFja2dyb3VuZDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcclxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbn1cclxuICBcclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6MjJweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5kb21haW4tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206MzVweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OjMycHg7XHJcbn1cclxuXHJcbi5pdGVtIHNwYW4ge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsOyAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbWFyZ2luLXRvcDphdXRvO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmJ0biBpIHtcclxuICBjb2xvcjojZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgdHJhbnNpdGlvbjozMDBtcyBtYXJnaW4tbGVmdDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE4cHggNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzgwODBCOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxufVxyXG5cclxuLmFjdGlvbiBhOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBjb2xvcjogI2VlZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaXRlbS1saXN0IHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi13aWR0aDogNDYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuIFxyXG4gIC5idWRnZXQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAgICAgICBcclxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgcGFkZGluZzogNTBweCAxNXB4OyAgICAgXHJcbiAgfVxyXG59XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuI3Jlc291cmNlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogJHBhZ2Utd2lkdGgvNTA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAjcmVzb3VyY2VzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwXCIpO1xuLmJ1ZGdldC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG59XG5cbi5pY29uLXNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxuciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBtYXJnaW46IDA7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1heC13aWR0aDogNDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1saXN0IGxpIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pdGVtLWxpc3QgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBiYWNrZ3JvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaSB7XG4gICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxufVxuLmJ1ZGdldC1jb250ZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNyZXNvdXJjZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyMi44cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIH1cbn1cbi5kaXNjbG9zdXJlIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvcHlyaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IK7V":
/*!**********************************************************!*\
  !*** ./src/app/add-item-form/add-item-form.component.ts ***!
  \**********************************************************/
/*! exports provided: AddItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemFormComponent", function() { return AddItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/shared/models/budget-item.model */ "U4vA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






function AddItemFormComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddItemFormComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-primary": a0, "is-success": a1 }; };
class AddItemFormComponent {
    constructor() {
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.item) {
            this.isNewItem = false;
        }
        else {
            this.isNewItem = true;
            this.item = new src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_1__["BudgetItem"]('', NaN);
        }
    }
    onSubmit(form) {
        this.formSubmit.emit(form.value);
        form.reset();
    }
}
AddItemFormComponent.ɵfac = function AddItemFormComponent_Factory(t) { return new (t || AddItemFormComponent)(); };
AddItemFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddItemFormComponent, selectors: [["app-add-item-form"]], inputs: { item: "item" }, outputs: { formSubmit: "formSubmit" }, decls: 14, vars: 9, consts: [[3, "ngSubmit"], ["itemForm", "ngForm"], [1, "field", "is-horizontal"], [1, "field-body"], [1, "field"], [1, "control"], ["type", "text", "name", "description", "required", "", "placeholder", "Description", 1, "input", "description", 3, "ngModel"], [1, "field", "is-narrow"], ["type", "number", "name", "amount", "required", "", "placeholder", "Amount", 1, "input", "amount", 3, "ngModel"], [1, "field", "is-narrow", "mobile-btn"], ["type", "submit", 1, "button", 3, "ngClass", "disabled"], [4, "ngIf"]], template: function AddItemFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddItemFormComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddItemFormComponent_span_12_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddItemFormComponent_span_13_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.item.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.isNewItem, !ctx.isNewItem))("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewItem);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".amount[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.mobile-option[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 800px) {\n  .amount[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1pdGVtLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFFSTtJQUNJLFdBQUE7RUFBTjtBQUNGIiwiZmlsZSI6ImFkZC1pdGVtLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW1vdW50IHtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG59XHJcblxyXG4ubW9iaWxlLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICBcclxuICAgIC5hbW91bnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "R2Hc":
/*!********************************************************!*\
  !*** ./src/app/credit-cards/credit-cards.component.ts ***!
  \********************************************************/
/*! exports provided: CreditCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardsComponent", function() { return CreditCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function CreditCardsComponent_div_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creditCards_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", creditCards_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", creditCards_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](creditCards_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", creditCards_r1.appLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CreditCardsComponent {
    constructor() {
        this.creditCards = new Array();
    }
    ngOnInit() {
        this.creditCards = [
            {
                'name': 'American Express Hilton Aspire',
                'imgPath': '../../assets/amexHiltonAspire.png',
                'appLink': 'http://refer.amex.us/ARTHUFjqqr?xl=cp105k'
            },
            {
                'name': 'American Express Hilton Surpass',
                'imgPath': '../../assets/amexHiltonSurpass.png',
                'appLink': 'http://refer.amex.us/ARTHUDFIYp?xl=cp105k'
            },
            {
                'name': 'American Express Delta Platinum',
                'imgPath': '../../assets/amexDeltaPlatinum.png',
                'appLink': 'http://refer.amex.us/ARTHUDv1WA?xl=cp105k'
            },
            {
                'name': 'American Express Charles Schwab Platinum',
                'imgPath': '../../assets/amexCSPlatinum.jpg',
                'appLink': 'https://www.schwab.com/credit-cards'
            },
            {
                'name': 'American Express Gold',
                'imgPath': '../../assets/amexGold.png',
                'appLink': 'http://refer.amex.us/ARTHUFcqTE?xl=cp106r'
            },
            {
                'name': 'Chase Sapphire Preferred',
                'imgPath': '../../assets/chaseCSP.png',
                'appLink': 'https://www.referyourchasecard.com/6b/AFSVSU98PB'
            },
            {
                'name': 'Chase Freedom Unlimited',
                'imgPath': '../../assets/chaseCFU.png',
                'appLink': 'https://www.referyourchasecard.com/18g/6BMU39STBP'
            },
            {
                'name': 'Citi Premier',
                'imgPath': '../../assets/citiPremier.jpg',
                'appLink': 'https://citicards.citi.com/usc/LPACA/Citi/Rewards/Premier/ps/index.html?cmp=knc|acquire|2006|CARDS|Google|BR&targetid=kwd-1341631461&ds_rl=1284033&gclid=CjwKCAjwlrqHBhByEiwAnLmYUEi0JRkBS5xGeGh83fyWeXuqZyIVQ6bp9lN5qhmuun-kjdTdzVUBTBoCsY4QAvD_BwE&gclsrc=aw.ds&BT_TX=1&ProspectID=DF07FFCC139842D5963B974D6D9B5246'
            },
            {
                'name': 'Bank of America Premium Rewards',
                'imgPath': '../../assets/bofaPR.png',
                'appLink': 'https://secure.bankofamerica.com/apply-credit-cards/public/icai-single/#/info/'
            }
        ];
    }
}
CreditCardsComponent.ɵfac = function CreditCardsComponent_Factory(t) { return new (t || CreditCardsComponent)(); };
CreditCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditCardsComponent, selectors: [["app-credit-cards"]], inputs: { creditCards: "creditCards" }, decls: 173, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], [1, "budget-content"], [1, "cards"], [1, "card"], [1, "card-image"], ["src", "../../assets/chaseCFF.png", "alt", ""], [1, "card-content"], [1, "card-title"], [1, "card-text"], [1, "table", "table-striped", "table-hover"], ["href", "https://www.referyourchasecard.com/18g/6BMU39STBP", 1, "card-readmore"], ["src", "../../assets/AmexPlatinum.png", "alt", ""], ["href", "http://refer.amex.us/ARTHUFcqTE?xl=cp106r", 1, "card-readmore"], ["src", "../../assets/boaCashRewards.png", "alt", ""], ["href", "https://secure.bankofamerica.com/apply-credit-cards/public/icai-single/#/info/", 1, "card-readmore"], ["class", "card-bottom", 4, "ngFor", "ngForOf"], [1, "card-bottom"], [1, "card-image-bottom"], [3, "src", "alt"], [1, "card-readmore", 3, "href"]], template: function CreditCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Credit Card Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why credit cards?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Credit cards are like a chain saw. If you know how to use them, they can be an incredible tool. If you don't, you may lose an arm playing with it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The advantages of credit card use are in a wide spectrum. It can be as simple as to build your credit, or it could be to enable access to some great perks and access to more comfort, specially when it comes to traveling. Whatever the reason is, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "please understand what you're doing and don't spend money you weren't already going to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ", otherwise this would all be a waste of money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Below are three of our personal top picks, but understand you should do your own research to pick something that fits you. Not every case is the same when it comes to credit card perks and rewards. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Some of the links below are affiliate or referral links. If you choose to get one of these products, you aren't required to apply through these links, but it would be greatly appreciated. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Chase Freedom Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "5% - Chase Travel Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "5% - Rotating Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3% - Dining & Drugstores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cashback is paid as Chase Ultimate Rewards Points, which can be used for greater value through transfers partners, if you get one of the Sapphire cards later on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "$200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "$500 in 3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "$0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "0% for the first 15 months, then 14.99%-23.74%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "American Express Platinum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "5X - Airfare (booked directly w/ airline)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "5X - Travel (through AmexTravel portal)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "- Marriot & Hilton hotel status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "- Airport lounge access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "- Amex Fine Hotels & Resorts + The Hotel Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "- Various statement credits for different merchants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "100-125K MR points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "$6,000 in 6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "$695");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "15.99%-22.99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Bank of America Customized Cash Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "3% - One category of your choice (gas, online shopping, dining, travel, drug stores, or home improvement/furnishings).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "2% - grocery stores and wholesale clubs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Bank of America has a boost for credit cards earning through their Preferred Rewards program. It does require you to have a substantial amount of money with Bank of America. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "$200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "$1000 in 3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "$0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "13.99%-23.99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Here are a few other personal recommendations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, CreditCardsComponent_div_172_Template, 8, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.creditCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n  background: #10101040;\n  line-height: 1.3;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: calc((600px - 100%) * 999);\n  min-width: 280px;\n  max-width: 330px;\n}\n.card[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background: white;\n  color: #000;\n  border-radius: 0.45em;\n  box-shadow: 3px 2px 14px rgba(38, 38, 49, 0.4);\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  background-size: cover;\n  justify-content: center;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  width: 200px;\n}\n@media only screen and (max-width: 800px) {\n  .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.card-text[_ngcontent-%COMP%] {\n  color: #0007;\n  font-style: 1.1rem;\n  width: 100%;\n}\n.card-readmore[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5em;\n  display: inline-flex;\n  text-decoration: none;\n  padding: 0.45em 1.05em;\n  border-radius: 0.45em;\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0);\n  color: #fff;\n  font-size: 1.1rem;\n  box-shadow: 0 0.5em 1.2em #0004;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#quote[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 4.5em;\n  font-weight: lighter;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('creditCardBanner.jpg');\n}\n@media only screen and (max-width: 800px) {\n  #quote[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGNyZWRpdC1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDUSxrRkFBQTtBQTJCUjtFQUNFLFdBQUE7RUFDQSxpQkFkVztFQWVYLGNBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRHNDQTtFQUNFLFdBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkF0Q1c7RUF1Q1gsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBOUNXO0VBK0NYLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0Esb0JBQUE7QUNwQ0Y7QURxQ0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ25DSjtBRDdCSTtFQTRERjtJQU1JLFVBQUE7SUFDQSxrQkFBQTtFQ2pDSjtBQUNGO0FEbUNNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDakNSO0FEb0NJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7QUNsQ047QURvQ0k7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDbENOO0FEb0NJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDbENOO0FEdUNBO0VBQ0UsV0FBQTtBQ3BDRjtBRHVDQTtFQUNFLG1CQUFBO0FDcENGO0FEdUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDcENGO0FEdUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3BDRjtBRHVDQTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQTlHVztFQStHWCxVQUFBO0FDcENGO0FEdUNBO0VBRUUsYUFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLCtDQUFBO0VBQ0Esa0NBQUE7RUFFQSxxQkFBQTtBQ3ZDRjtBRDRDQTs7RUFFRSxzQkFBQTtFQUNBLGtDQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDekNGO0FENENBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekNGO0FENENBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDekNGO0FENENBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDekNGO0FENENBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FDekNGO0FENENBO0VBQ0UsaUJBOU9XO0FDcU1iO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ3pDRjtFRDBDRTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtFQ3hDSjtFRHlDSTtJQUNFLHdCQUFBO0VDdkNOO0VEd0NNO0lBQ0UsY0FBQTtFQ3RDUjtFRHlDTTtJQUNFLHFCQUFBO0VDdkNSOztFRDZDQTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxVQUFBO0VDMUNGOztFRDZDQTtJQUNFLGtCQUFBO0VDMUNGO0FBQ0Y7QUQ4Q0U7RUFDRSxpQkFBQTtBQzVDSjtBRGdEQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQzdDRjtBRGdEQTtFQUVFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUM5Q0Y7O0VEaURBO0lBQ0Usb0JBQUE7RUM5Q0Y7QUFDRjtBRGlEQTtFQUNFO0lBQ0UsbUJBQUE7RUMvQ0Y7QUFDRjtBQTlSQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQWdTRjtBQTdSQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBZ1NGO0FBN1JBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUErUkY7QUE3UkE7RUFDRSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZ1NGO0FBN1JBO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQStSRjtBQTlSRTtFQUNFLFdBQUE7QUFnU0o7QUE1UkE7RUFDRSxjQUFBO0FBK1JGO0FBNVJBO0VBQ0UsZ0JBQUE7QUErUkY7QUE1UkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtBQThSRjtBQTVSRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQThSSjtBQXpSRTtFQUNFO0lBQ0UsaUJBQUE7RUE0Uko7QUFDRjtBQXhSQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTJSRjtBQXhSQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBMlJGO0FBelJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBR0EsV0FBQTtBQTBSRjtBQXZSQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRFQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUEwUkY7QUF2UkE7RUFDRSxrQkFBQTtBQTBSRjtBQXhSQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQTJSRjtBQXhSQTtFQUNFLDZDQUFBO0FBMlJGO0FBeFJBO0VBQ0U7SUFDRSxnQkFBQTtFQTJSRjtBQUNGIiwiZmlsZSI6ImNyZWRpdC1jYXJkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwidXRmLThcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDAnKTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gICdzbWFsbCc6ICA3NjdweCxcclxuICAnbWVkaXVtJzogODIwcHgsXHJcbiAgJ2xhcmdlJzogIDEyMDBweFxyXG4pO1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiRwYWdlLXdpZHRoOiAxMTQwcHg7XHJcbiRwcmltYXJ5LWNvbG9yOiAjMTlENERFO1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG4gIFxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xyXG59XHJcblxyXG4uaWNvbi1zZXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgLmxuciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIC4yNWVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICBmb250LXNpemU6MjZweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBsaW5lLWhlaWdodDoyMnB4O1xyXG4gIG1heC13aWR0aDo0NjBweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IGxpIHtcclxuICAvLyB3aWR0aDogMjY1cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46MCAxMHB4O1xyXG59IFxyXG5cclxuLml0ZW0tbGlzdCBsaSBhIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjI2N3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBwYWRkaW5nOjM1cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgYmFja2dyb3VuZDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcclxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbn1cclxuICBcclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6MjJweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5kb21haW4tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206MzVweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OjMycHg7XHJcbn1cclxuXHJcbi5pdGVtIHNwYW4ge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsOyAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbWFyZ2luLXRvcDphdXRvO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmJ0biBpIHtcclxuICBjb2xvcjojZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgdHJhbnNpdGlvbjozMDBtcyBtYXJnaW4tbGVmdDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE4cHggNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzgwODBCOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxufVxyXG5cclxuLmFjdGlvbiBhOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBjb2xvcjogI2VlZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaXRlbS1saXN0IHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi13aWR0aDogNDYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuIFxyXG4gIC5idWRnZXQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAgICAgICBcclxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgcGFkZGluZzogNTBweCAxNXB4OyAgICAgXHJcbiAgfVxyXG59XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuI3Jlc291cmNlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogJHBhZ2Utd2lkdGgvNTA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAjcmVzb3VyY2VzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwXCIpO1xuLmJ1ZGdldC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG59XG5cbi5pY29uLXNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxuciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBtYXJnaW46IDA7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1heC13aWR0aDogNDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1saXN0IGxpIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pdGVtLWxpc3QgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBiYWNrZ3JvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaSB7XG4gICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxufVxuLmJ1ZGdldC1jb250ZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNyZXNvdXJjZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyMi44cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIH1cbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA0MDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FyZHMgPiAqIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiBjYWxjKCg2MDBweCAtIDEwMCUpICogOTk5KTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbn1cblxuLmNhcmQsIC5jYXJkLWJvdHRvbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBib3gtc2hhZG93OiAzcHggMnB4IDE0cHggcmdiYSgzOCwgMzgsIDQ5LCAwLjQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY2FyZCAudGV4dCwgLmNhcmQtYm90dG9tIC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkLWJvdHRvbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWltYWdlLCAuY2FyZC1pbWFnZS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkLWltYWdlIGltZywgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLXRleHQge1xuICBjb2xvcjogIzAwMDc7XG4gIGZvbnQtc3R5bGU6IDEuMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXJlYWRtb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC40NWVtIDEuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMCwgMTM2LCAwLjc3NCksICM0YzAwZmYsICMwMDAwYzApO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMS4yZW0gIzAwMDQ7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDQuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY3JlZGl0Q2FyZEJhbm5lci5qcGdcIik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI3F1b3RlIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "4Niy");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_content_footer_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer-content/footer-content.component */ "8a+g");







class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.title = 'Arthur Figueiredo | Home';
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "main"], ["role", "navigation"], ["sidenav", ""], [3, "sidenavClose"], [3, "sidenavToggle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sidenav-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavClose", function AppComponent_Template_app_sidenav_list_sidenavClose_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-navigation", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavToggle", function AppComponent_Template_app_navigation_sidenavToggle_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_3__["SidenavListComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _footer_content_footer_content_component__WEBPACK_IMPORTED_MODULE_6__["FooterContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T6+m":
/*!**************************************************!*\
  !*** ./src/app/edit-item/edit-item.component.ts ***!
  \**************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_shared_models_budget_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/models/budget-item.model */ "U4vA");
/* harmony import */ var _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-item-form/add-item-form.component */ "IK7V");





class EditItemComponent {
    constructor(dialogRef, item) {
        this.dialogRef = dialogRef;
        this.item = item;
    }
    ngOnInit() {
    }
    onSubmitted(updatedItem) {
        this.dialogRef.close(updatedItem);
    }
}
EditItemComponent.ɵfac = function EditItemComponent_Factory(t) { return new (t || EditItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
EditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditItemComponent, selectors: [["app-edit-item"]], decls: 3, vars: 1, consts: [[1, "title"], [3, "item", "formSubmit"]], template: function EditItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-add-item-form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("formSubmit", function EditItemComponent_Template_app_add_item_form_formSubmit_2_listener($event) { return ctx.onSubmitted($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", ctx.item);
    } }, directives: [_add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_3__["AddItemFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "U4vA":
/*!************************************************!*\
  !*** ./src/shared/models/budget-item.model.ts ***!
  \************************************************/
/*! exports provided: BudgetItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItem", function() { return BudgetItem; });
class BudgetItem {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _budget_calculator_budget_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./budget-calculator/budget-calculator.component */ "xra+");
/* harmony import */ var _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-item-form/add-item-form.component */ "IK7V");
/* harmony import */ var _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./budget-item-list/budget-item-list.component */ "f0T3");
/* harmony import */ var _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./budget-item-list/budget-item-card/budget-item-card.component */ "8Ynw");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _footer_content_footer_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer-content/footer-content.component */ "8a+g");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "4Niy");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _networth_networth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./networth/networth.component */ "6nXz");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "T6+m");
/* harmony import */ var _credit_cards_credit_cards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./credit-cards/credit-cards.component */ "R2Hc");
/* harmony import */ var _bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bank-accounts/bank-accounts.component */ "l795");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




























// import { RoutingModule } from './routing/routing.module';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({ providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _budget_calculator_budget_calculator_component__WEBPACK_IMPORTED_MODULE_5__["BudgetCalculatorComponent"],
        _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_6__["AddItemFormComponent"],
        _budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_7__["BudgetItemListComponent"],
        _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_8__["BudgetItemCardComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
        _footer_content_footer_content_component__WEBPACK_IMPORTED_MODULE_12__["FooterContentComponent"],
        _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_18__["SidenavListComponent"],
        _networth_networth_component__WEBPACK_IMPORTED_MODULE_21__["NetworthComponent"],
        _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_22__["EditItemComponent"],
        _credit_cards_credit_cards_component__WEBPACK_IMPORTED_MODULE_23__["CreditCardsComponent"],
        _bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_24__["BankAccountsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_budget_calculator_budget_calculator_component__WEBPACK_IMPORTED_MODULE_5__["BudgetCalculatorComponent"], [_budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_7__["BudgetItemListComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetComponentScope"](_budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_7__["BudgetItemListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgForOf"], _budget_item_list_budget_item_card_budget_item_card_component__WEBPACK_IMPORTED_MODULE_8__["BudgetItemCardComponent"],
    _add_item_form_add_item_form_component__WEBPACK_IMPORTED_MODULE_6__["AddItemFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_26__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"]], [_angular_common__WEBPACK_IMPORTED_MODULE_26__["CurrencyPipe"]]);


/***/ }),

/***/ "f0T3":
/*!****************************************************************!*\
  !*** ./src/app/budget-item-list/budget-item-list.component.ts ***!
  \****************************************************************/
/*! exports provided: BudgetItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetItemListComponent", function() { return BudgetItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-item/edit-item.component */ "T6+m");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




function BudgetItemListComponent_div_2_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_2_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_2_div_3_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_2_div_3_div_1_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.onDeleteButtonClicked(item_r11); })("cardClick", function BudgetItemListComponent_div_2_div_3_div_1_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onCardClicked(item_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r11);
} }
function BudgetItemListComponent_div_2_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_2_div_3_div_1_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r11.amount >= 0);
} }
function BudgetItemListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_2_div_3_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.budgetItems);
} }
function BudgetItemListComponent_div_2_div_4_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_2_div_4_div_1_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.onDeleteButtonClicked(item_r20); })("cardClick", function BudgetItemListComponent_div_2_div_4_div_1_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.onCardClicked(item_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r20);
} }
function BudgetItemListComponent_div_2_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_2_div_4_div_1_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r20.amount >= 0);
} }
function BudgetItemListComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_2_div_4_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.networthItems);
} }
function BudgetItemListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_2_h1_1_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BudgetItemListComponent_div_2_h1_2_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BudgetItemListComponent_div_2_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetItemListComponent_div_2_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function BudgetItemListComponent_div_2_Template_app_add_item_form_formSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addItemPos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isBudget);
} }
function BudgetItemListComponent_div_3_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_3_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_3_div_3_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-budget-item-card", 17);
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r35);
} }
function BudgetItemListComponent_div_3_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_3_div_3_div_1_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r35.amount >= 0);
} }
function BudgetItemListComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_3_div_3_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.budgetItems);
} }
function BudgetItemListComponent_div_3_div_4_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-budget-item-card", 17);
} if (rf & 2) {
    const item_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r39);
} }
function BudgetItemListComponent_div_3_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_3_div_4_div_1_app_budget_item_card_1_Template, 1, 1, "app-budget-item-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r39.amount >= 0);
} }
function BudgetItemListComponent_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_3_div_4_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.networthItems);
} }
function BudgetItemListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_3_h1_1_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BudgetItemListComponent_div_3_h1_2_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BudgetItemListComponent_div_3_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetItemListComponent_div_3_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function BudgetItemListComponent_div_3_Template_app_add_item_form_formSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.addItemPos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isBudget);
} }
function BudgetItemListComponent_div_4_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_4_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Liabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_4_div_3_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_4_div_3_div_1_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r51.onDeleteButtonClicked(item_r49); })("cardClick", function BudgetItemListComponent_div_4_div_3_div_1_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r54.onCardClicked(item_r49); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r49)("isPos", false);
} }
function BudgetItemListComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_4_div_3_div_1_app_budget_item_card_1_Template, 1, 2, "app-budget-item-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r49.amount < 0);
} }
function BudgetItemListComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_4_div_3_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r46.budgetItems);
} }
function BudgetItemListComponent_div_4_div_4_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-budget-item-card", 22);
} if (rf & 2) {
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r58)("isPos", false);
} }
function BudgetItemListComponent_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_4_div_4_div_1_app_budget_item_card_1_Template, 1, 2, "app-budget-item-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.amount < 0);
} }
function BudgetItemListComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_4_div_4_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r47.networthItems);
} }
function BudgetItemListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_4_h1_1_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BudgetItemListComponent_div_4_h1_2_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BudgetItemListComponent_div_4_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetItemListComponent_div_4_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function BudgetItemListComponent_div_4_Template_app_add_item_form_formSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.addItemNeg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isBudget);
} }
function BudgetItemListComponent_div_5_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_5_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Liabilities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BudgetItemListComponent_div_5_div_3_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-budget-item-card", 22);
} if (rf & 2) {
    const item_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r68)("isPos", false);
} }
function BudgetItemListComponent_div_5_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_5_div_3_div_1_app_budget_item_card_1_Template, 1, 2, "app-budget-item-card", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r68.amount < 0);
} }
function BudgetItemListComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_5_div_3_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r65.budgetItems);
} }
function BudgetItemListComponent_div_5_div_4_div_1_app_budget_item_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-budget-item-card", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("xButtonClick", function BudgetItemListComponent_div_5_div_4_div_1_app_budget_item_card_1_Template_app_budget_item_card_xButtonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r74.onDeleteButtonClicked(item_r72); })("cardClick", function BudgetItemListComponent_div_5_div_4_div_1_app_budget_item_card_1_Template_app_budget_item_card_cardClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r77.onCardClicked(item_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r72)("isPos", false);
} }
function BudgetItemListComponent_div_5_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_5_div_4_div_1_app_budget_item_card_1_Template, 1, 2, "app-budget-item-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r72.amount < 0);
} }
function BudgetItemListComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_5_div_4_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.networthItems);
} }
function BudgetItemListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BudgetItemListComponent_div_5_h1_1_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BudgetItemListComponent_div_5_h1_2_Template, 2, 0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BudgetItemListComponent_div_5_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetItemListComponent_div_5_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-add-item-form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("formSubmit", function BudgetItemListComponent_div_5_Template_app_add_item_form_formSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r80.addItemNeg($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.isBudget);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isBudget);
} }
const _c0 = function (a0, a1) { return { "red": a0, "green": a1 }; };
function BudgetItemListComponent_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r4.totalBudget < 0, ctx_r4.totalBudget > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r4.totalBudget));
} }
function BudgetItemListComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r5.totalNetworth < 0, ctx_r5.totalNetworth > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r5.totalNetworth));
} }
class BudgetItemListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.budgetItems = new Array();
        this.networthItems = new Array();
        this.totalBudget = 0;
        this.totalNetworth = 0;
        this.isBudget = true;
        this.isPos = true;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mobile = false;
    }
    ngOnInit() {
        if (window.screen.width <= 850) {
            this.mobile = true;
        }
        if (this.isBudget == true) {
            this.budgetItems = JSON.parse(localStorage.getItem('Budget Items') || '[]');
            this.totalBudget = Number(JSON.parse(localStorage.getItem('Total Amount') || '[]'));
        }
        else if (this.isBudget == false) {
            this.networthItems = JSON.parse(localStorage.getItem('Networth Items') || '[]');
            this.totalNetworth = Number(JSON.parse(localStorage.getItem('Total Networth') || '[]'));
        }
    }
    addItemPos(newItem) {
        if (this.isBudget == true) {
            if (newItem.amount >= 0) {
                this.budgetItems.push(newItem);
                this.totalBudget += newItem.amount;
            }
            localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
            localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
        }
        else if (this.isBudget == false) {
            if (newItem.amount >= 0) {
                this.networthItems.push(newItem);
                this.totalNetworth += newItem.amount;
            }
            localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
            localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
        }
    }
    addItemNeg(newItem) {
        newItem.amount = newItem.amount * -1;
        if (this.isBudget == true) {
            if (newItem.amount < 0) {
                this.budgetItems.push(newItem);
                this.totalBudget += newItem.amount;
            }
            localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
            localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
        }
        else if (this.isBudget == false) {
            if (newItem.amount < 0) {
                this.networthItems.push(newItem);
                this.totalNetworth += newItem.amount;
            }
            localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
            localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
        }
    }
    onDeleteButtonClicked(item) {
        if (this.isBudget == true) {
            let index = this.budgetItems.indexOf(item);
            this.budgetItems.splice(index, 1);
            this.totalBudget -= item.amount;
            localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
            localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
        }
        else if (this.isBudget == false) {
            let index = this.networthItems.indexOf(item);
            this.networthItems.splice(index, 1);
            this.totalNetworth -= item.amount;
            localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
            localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
        }
    }
    onCardClicked(item) {
        const dialogRef = this.dialog.open(_edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_1__["EditItemComponent"], {
            width: '540px',
            data: item
        });
        dialogRef.afterClosed().subscribe(result => {
            if (this.isBudget == true) {
                if (result) {
                    this.budgetItems[this.budgetItems.indexOf(item)] = result;
                    this.totalBudget -= item.amount;
                    this.totalBudget += result.amount;
                }
                localStorage.setItem('Budget Items', JSON.stringify(this.budgetItems));
                localStorage.setItem('Total Amount', JSON.stringify(this.totalBudget));
            }
            else if (this.isBudget == false) {
                if (result) {
                    this.networthItems[this.networthItems.indexOf(item)] = result;
                    this.totalNetworth -= item.amount;
                    this.totalNetworth += result.amount;
                }
                localStorage.setItem('Networth Items', JSON.stringify(this.networthItems));
                localStorage.setItem('Total Networth', JSON.stringify(this.totalNetworth));
            }
        });
    }
}
BudgetItemListComponent.ɵfac = function BudgetItemListComponent_Factory(t) { return new (t || BudgetItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
BudgetItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetItemListComponent, selectors: [["app-budget-item-list"]], inputs: { budgetItems: "budgetItems", networthItems: "networthItems", isBudget: "isBudget" }, outputs: { delete: "delete" }, decls: 9, vars: 6, consts: [[1, "budget-items-section"], [1, "budget-items-container"], ["class", "income-column", 4, "ngIf"], ["class", "expenses-column", 4, "ngIf"], [1, "total-budget-section", "budget-content"], [3, "ngClass", 4, "ngIf"], [1, "income-column"], [4, "ngIf"], ["class", "budget-items", 4, "ngIf"], [1, "add-item-section"], [1, "add-item-container"], [2, "padding", "20px", 3, "formSubmit"], [1, "budget-items"], [4, "ngFor", "ngForOf"], ["style", "display: block; margin-bottom: 20px;", 3, "item", "xButtonClick", "cardClick", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px", 3, "item", "xButtonClick", "cardClick"], ["style", "display: block; margin-bottom: 20px;", 3, "item", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px", 3, "item"], [1, "expenses-column"], ["style", "display: block; margin-bottom: 20px;", 3, "item", "isPos", "xButtonClick", "cardClick", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px", 3, "item", "isPos", "xButtonClick", "cardClick"], ["style", "display: block; margin-bottom: 20px;", 3, "item", "isPos", 4, "ngIf"], [2, "display", "block", "margin-bottom", "20px", 3, "item", "isPos"], [3, "ngClass"]], template: function BudgetItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BudgetItemListComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BudgetItemListComponent_div_3_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BudgetItemListComponent_div_4_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BudgetItemListComponent_div_5_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BudgetItemListComponent_h2_7_Template, 3, 7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BudgetItemListComponent_h2_8_Template, 3, 7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBudget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBudget);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1140px;\n  width: 100%;\n  height: 100%;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n.total-budget-section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n  max-width: 1140px;\n  border-top: 2px solid #161c29;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0 auto;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-weight: 300;\n  font-size: 58px;\n  color: #161c29;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff551a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJ1ZGdldC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esa0ZBQUE7QUEyQlI7RUFDRSxXQUFBO0VBQ0EsaUJBZFc7RUFlWCxjQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QURzQ0E7RUFDRSxXQUFBO0FDbkNGO0FEc0NBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBdENXO0VBdUNYLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDbkNGO0FEc0NBO0VBQ0UsY0FBQTtFQUNBLGlCQTlDVztFQStDWCxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0FDcENGO0FEcUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuQ0o7QUQ3Qkk7RUE0REY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7RUNqQ0o7QUFDRjtBRG1DTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2pDUjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDbENOO0FEb0NJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ2xDTjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2xDTjtBRHVDQTtFQUNFLFdBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkE5R1c7RUErR1gsVUFBQTtBQ3BDRjtBRHVDQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0FDckNGO0FEd0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QUN2Q0Y7QUQ0Q0E7O0VBRUUsc0JBQUE7RUFDQSxrQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDekNGO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQTlPVztBQ3FNYjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUN6Q0Y7RUQwQ0U7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUN4Q0o7RUR5Q0k7SUFDRSx3QkFBQTtFQ3ZDTjtFRHdDTTtJQUNFLGNBQUE7RUN0Q1I7RUR5Q007SUFDRSxxQkFBQTtFQ3ZDUjs7RUQ2Q0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsVUFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGO0FEOENFO0VBQ0UsaUJBQUE7QUM1Q0o7QURnREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUM3Q0Y7QURnREE7RUFFRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDOUNGOztFRGlEQTtJQUNFLG9CQUFBO0VDOUNGO0FBQ0Y7QURpREE7RUFDRTtJQUNFLG1CQUFBO0VDL0NGO0FBQ0Y7QUE5UkE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFRQSx1QkFBQTtFQUNBLG1CQUFBO0FBeVJKO0FBaFNJO0VBTEo7SUFNUSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQW1TTjtBQUNGO0FBOVJJO0VBQ0ksYUFBQTtFQUNBLGlCREZLO0VDR0wsV0FBQTtFQUNBLFlBQUE7QUFnU1I7QUE5UlE7RUFOSjtJQU9RLGVBQUE7SUFDQSxzQkFBQTtFQWlTVjtBQUNGO0FBOVJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFnU1o7QUE5Ulk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWdTaEI7QUE1UlE7RUFDSSxrQkFBQTtBQThSWjtBQTVSWTtFQUhKO0lBSVEsZUFBQTtFQStSZDtBQUNGO0FBN1JZO0VBQ0ksY0QzQlI7QUMwVFI7QUExUlk7RUFDSSxjRDlCVjtBQzBUTjtBQXRSQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJEaERTO0VDaURULDZCQUFBO0VBRUEseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUF3Uko7QUF0Ukk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEdkREO0FDK1VQO0FBdFJRO0VBQ0ksY0FBQTtBQXdSWjtBQXJSUTtFQUNJLGNBQUE7QUF1UloiLCJmaWxlIjoiYnVkZ2V0LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwidXRmLThcIjtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDAnKTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gICdzbWFsbCc6ICA3NjdweCxcclxuICAnbWVkaXVtJzogODIwcHgsXHJcbiAgJ2xhcmdlJzogIDEyMDBweFxyXG4pO1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiRwYWdlLXdpZHRoOiAxMTQwcHg7XHJcbiRwcmltYXJ5LWNvbG9yOiAjMTlENERFO1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG4gIFxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xyXG59XHJcblxyXG4uaWNvbi1zZXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgLmxuciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIC4yNWVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbn1cclxuXHJcbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICBmb250LXNpemU6MjZweDtcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XHJcbiAgZm9udC1zaXplOjE4cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBsaW5lLWhlaWdodDoyMnB4O1xyXG4gIG1heC13aWR0aDo0NjBweDtcclxuICBtYXJnaW46MCBhdXRvO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IGxpIHtcclxuICAvLyB3aWR0aDogMjY1cHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW46MCAxMHB4O1xyXG59IFxyXG5cclxuLml0ZW0tbGlzdCBsaSBhIHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjI2N3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBwYWRkaW5nOjM1cHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgYmFja2dyb3VuZDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcclxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbn1cclxuICBcclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6MjJweDtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5kb21haW4tdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206MzVweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OjMycHg7XHJcbn1cclxuXHJcbi5pdGVtIHNwYW4ge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsOyAgICBcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbWFyZ2luLXRvcDphdXRvO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmJ0biBpIHtcclxuICBjb2xvcjojZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgdHJhbnNpdGlvbjozMDBtcyBtYXJnaW4tbGVmdDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNjRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24gYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDE4cHggNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzgwODBCOTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xyXG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxufVxyXG5cclxuLmFjdGlvbiBhOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICBjb2xvcjogI2VlZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgZm9udC1zaXplOiAyLjVlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaXRlbS1saXN0IHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1pbi13aWR0aDogNDYwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuIFxyXG4gIC5idWRnZXQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAgICAgICBcclxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgcGFkZGluZzogNTBweCAxNXB4OyAgICAgXHJcbiAgfVxyXG59XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuI3Jlc291cmNlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogJHBhZ2Utd2lkdGgvNTA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAjcmVzb3VyY2VzIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwXCIpO1xuLmJ1ZGdldC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG59XG5cbi5pY29uLXNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxuciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBtYXJnaW46IDA7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1heC13aWR0aDogNDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXRlbS1saXN0IGxpIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pdGVtLWxpc3QgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBiYWNrZ3JvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDExNDBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaSB7XG4gICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxufVxuLmJ1ZGdldC1jb250ZW50IGgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNyZXNvdXJjZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAyMi44cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XG4gICNyZXNvdXJjZXMge1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG4gIH1cbn1cbi5idWRnZXQtaXRlbXMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG59XG4uYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uLCAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmV4cGVuc2VzLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IDA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciAuaW5jb21lLWNvbHVtbiAuYnVkZ2V0LWl0ZW1zLCAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmV4cGVuc2VzLWNvbHVtbiAuYnVkZ2V0LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciAuaW5jb21lLWNvbHVtbiB7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbi5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciAuaW5jb21lLWNvbHVtbiBoMSB7XG4gIGNvbG9yOiAjMDBjYzg2O1xufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5leHBlbnNlcy1jb2x1bW4gaDEge1xuICBjb2xvcjogI2RjMzkwMDtcbn1cblxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTYxYzI5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50b3RhbC1idWRnZXQtc2VjdGlvbiBoMiB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA1OHB4O1xuICBjb2xvcjogIzE2MWMyOTtcbn1cbi50b3RhbC1idWRnZXQtc2VjdGlvbiBoMi5ncmVlbiB7XG4gIGNvbG9yOiAjMGFmZmFiO1xufVxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIGgyLnJlZCB7XG4gIGNvbG9yOiAjZmY1NTFhO1xufSJdfQ== */"] });


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");









class NavigationComponent {
    constructor(titleService) {
        this.titleService = titleService;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
    }
    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], outputs: { sidenavToggle: "sidenavToggle" }, decls: 24, vars: 0, consts: [["id", "nav"], [1, "main-nav-bar"], [1, "mobile-nav"], ["routerLink", "/", 3, "click"], ["src", "../../assets/logo.png", "id", "logo", "alt", "logo"], ["fxHide.gt-xs", "", 1, "mobile-menu"], ["mat-icon-button", "", 3, "click"], [1, "white-icon"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "15px", 1, "navigation-items"], ["routerLink", "budget", 3, "click"], ["routerLink", "networth", 3, "click"], ["routerLink", "credit-cards", 3, "click"], ["routerLink", "bank-accounts", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_4_listener() { return ctx.setTitle("Arthur Figueiredo | Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_7_listener() { return ctx.onToggleSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_13_listener() { return ctx.setTitle("Arthur Figueiredo | Budget Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_16_listener() { return ctx.setTitle("Arthur Figueiredo | Networth Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Net Worth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_19_listener() { return ctx.setTitle("Arthur Figueiredo | Credit Card Picls"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Credit Card Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_a_click_22_listener() { return ctx.setTitle("Arthur Figueiredo | Bank Account Picls"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bank Account Picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\nmat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 10px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n@media (max-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n.main-nav-bar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1140px;\n  background-color: transparent;\n}\n.mobile-nav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n.mobile-nav[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n#nav[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0, #4f017c, #8503a5, #9e019e);\n}\n.white-icon[_ngcontent-%COMP%] {\n  color: white;\n  filter: drop-shadow(2px 2px 2px black);\n}\n#logo[_ngcontent-%COMP%] {\n  width: 90px;\n  filter: drop-shadow(4px 4px 4px #222);\n}\n@media (max-width: 959px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esa0ZBQUE7QUEyQlI7RUFDRSxXQUFBO0VBQ0EsaUJBZFc7RUFlWCxjQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QURzQ0E7RUFDRSxXQUFBO0FDbkNGO0FEc0NBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBdENXO0VBdUNYLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDbkNGO0FEc0NBO0VBQ0UsY0FBQTtFQUNBLGlCQTlDVztFQStDWCxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0FDcENGO0FEcUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuQ0o7QUQ3Qkk7RUE0REY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7RUNqQ0o7QUFDRjtBRG1DTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2pDUjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDbENOO0FEb0NJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ2xDTjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2xDTjtBRHVDQTtFQUNFLFdBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkE5R1c7RUErR1gsVUFBQTtBQ3BDRjtBRHVDQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0FDckNGO0FEd0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QUN2Q0Y7QUQ0Q0E7O0VBRUUsc0JBQUE7RUFDQSxrQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDekNGO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQTlPVztBQ3FNYjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUN6Q0Y7RUQwQ0U7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUN4Q0o7RUR5Q0k7SUFDRSx3QkFBQTtFQ3ZDTjtFRHdDTTtJQUNFLGNBQUE7RUN0Q1I7RUR5Q007SUFDRSxxQkFBQTtFQ3ZDUjs7RUQ2Q0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsVUFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGO0FEOENFO0VBQ0UsaUJBQUE7QUM1Q0o7QURnREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUM3Q0Y7QURnREE7RUFFRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDOUNGOztFRGlEQTtJQUNFLG9CQUFBO0VDOUNGO0FBQ0Y7QURpREE7RUFDRTtJQUNFLG1CQUFBO0VDL0NGO0FBQ0Y7QUE5UkE7RUFDSSxZQUFBO0FBZ1NKO0FBN1JBO0VBQ0ksWUFBQTtBQWdTSjtBQTdSQTtFQUNJLGFBQUE7QUFnU0o7QUE3UkE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFnU0o7QUE3UkE7RUFDSSxnQkFBQTtBQWdTSjtBQTdSQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFnU0o7QUE3UkE7RUFDSSxrQkFBQTtBQWdTSjtBQTdSQTtFQUNJO0lBQ0ksa0JBQUE7RUFnU047QUFDRjtBQTdSQTtFQUVJLGNBQUE7RUFDQSxpQkQxQlM7RUMyQlQsNkJBQUE7QUE4Uko7QUEzUkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBOFJKO0FBNVJJO0VBQ0ksZ0JBQUE7QUE4UlI7QUExUkE7RUFDSSx1R0FBQTtBQTZSSjtBQTFSQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtBQTZSSjtBQTFSQTtFQUNJLFdBQUE7RUFDQSxxQ0FBQTtBQTZSSjtBQTFSQTtFQUNJO0lBQ0ksV0FBQTtFQTZSTjtBQUNGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcInV0Zi04XCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKTtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kcGFnZS13aWR0aDogMTE0MHB4O1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMzkwMDtcclxuJGxpZ2h0LXJlZDogI2ZmZTVlMztcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAuaWNvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKG1lZGl1bSkge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSwgcCAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDN7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6MjJweDtcclxuICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLml0ZW0tbGlzdCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaSB7XHJcbiAgLy8gd2lkdGg6IDI2NXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxufSBcclxuXHJcbi5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgcGFkZGluZzozNXB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4uZG9tYWluLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDozMnB4O1xyXG59XHJcblxyXG4uaXRlbSBzcGFuIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDsgICAgXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5idG4gaSB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MDgwQjk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbn1cclxuXHJcbi5hY3Rpb24gYTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG59XHJcblxyXG4jcXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgICAgICAgXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweDsgICAgIFxyXG4gIH1cclxufVxyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbiNyZXNvdXJjZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6ICRwYWdlLXdpZHRoLzUwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMFwiKTtcbi5idWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xufVxuXG4uaWNvbi1zZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSwgLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEge1xuICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRvbWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbWFyZ2luLWxlZnQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MEI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XG59XG5cbi5hY3Rpb24gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59XG5cbiNxdW90ZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5idWRnZXQtY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcmVzb3VyY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMjIuOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB9XG59XG5tYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlciwgYTphY3RpdmUge1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIG1hdC10b29sYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIH1cbn1cbi5tYWluLW5hdi1iYXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubW9iaWxlLW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubW9iaWxlLW5hdiAubW9iaWxlLW1lbnUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4jbmF2IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDAsIDEzNiwgMC43NzQpLCAjNGMwMGZmLCAjMDAwMGMwLCAjNGYwMTdjLCAjODUwM2E1LCAjOWUwMTllKTtcbn1cblxuLndoaXRlLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggYmxhY2spO1xufVxuXG4jbG9nbyB7XG4gIHdpZHRoOiA5MHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCA0cHggNHB4ICMyMjIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgI2xvZ28ge1xuICAgIHdpZHRoOiA3NXB4O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "l795":
/*!**********************************************************!*\
  !*** ./src/app/bank-accounts/bank-accounts.component.ts ***!
  \**********************************************************/
/*! exports provided: BankAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccountsComponent", function() { return BankAccountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function BankAccountsComponent_section_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Interest Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Monthly fee*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Overdraft Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Does it offer a debit card?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", account_r2.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", account_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 11, account_r2.interestRate / 100, "0.0-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, account_r2.monthlyFee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, account_r2.sub));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 18, account_r2.overdraftFee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r2.debitCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", account_r2.appLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BankAccountsComponent_section_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Interest Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "percent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Monthly fee*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sign up bonus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Overdraft Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Does it offer a debit card?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", account_r3.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", account_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 11, account_r3.interestRate / 100, "0.0-10"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, account_r3.monthlyFee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 16, account_r3.sub));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 18, account_r3.overdraftFee));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](account_r3.debitCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", account_r3.appLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class BankAccountsComponent {
    constructor() {
        this.bankAccounts = new Array();
    }
    ngOnInit() {
        this.bankAccounts = [
            {
                'name': 'Chase Total Checking',
                'type': 'checking',
                'imgPath': '../../assets/chaseLogo.svg',
                'interestRate': 0.01,
                'monthlyFee': 12,
                'sub': 225,
                'overdraftFee': 34,
                'debitCard': 'Yes',
                'description': 'Chase is one of the largest banks in the United States. The advantage of having an account with them is that, well, they are everywhere. So, if you like to road trip or fliy all around the country, this may be a good option for you as you are almost guaranteed to have a branch near you wherever you are. The down side though, is that you also get all the fees of a big bank as well, if you are not careful with avoiding them. There are ways to avoid the monthly maintenance fee, and to turn off the overdraft feature, but those are extra steps to avoid those, which is inconvenient.',
                'appLink': 'https://account.chase.com/consumer/banking/RT62337?sitelink=headline&jp_cmp=rb/Retail_Brand_BMM_Chk-Bnk_SEM_IFP_DeskTab_Standard_NA/sea/p25218732600/chase+checking&opti_ca=674189475&opti_ag=33556516039&opti_ad=531212795162&opti_key=aud-461562237081:kwd-27929122426&gclid=CjwKCAjwlrqHBhByEiwAnLmYUPOfW7xfWnECoeAp18HQDWwpnL6leXzl0TBdddhMbiupKpaSYCRBNhoCP-YQAvD_BwE&gclsrc=aw.ds'
            },
            {
                'name': 'Mountain America CU MyFree Checking',
                'type': 'checking',
                'imgPath': '../../assets/macuLogo.png',
                'interestRate': 0,
                'monthlyFee': 0,
                'sub': 0,
                'overdraftFee': 25,
                'debitCard': 'Yes',
                'description': 'Mountain America Credit Union services quite a few states on the west side of the United States. If you happen to live in one of them, this may be a great option. This account is free to have, and they share the credit union network across the country, so although you might not have a branch everywhere, you sure will have an ATM without fees. This account is great for simplicity. There aren\'t a lot of strong pros, but there aren\'t a lot of strong cons either.',
                'appLink': 'https://www.macu.com/accounts/checking/free-checking'
            },
            {
                'name': 'Bonus: Charles Schwab Investor Checking',
                'type': 'checking',
                'imgPath': '../../assets/csLogo.png',
                'interestRate': 0.03,
                'monthlyFee': 0,
                'sub': 0,
                'overdraftFee': 0,
                'debitCard': 'Yes',
                'description': 'Now, this is my personal favorite. It has a few cons that can be a deal breaker for some, but the pros overweight those, to me at least. The main 2 features of this account are 1. no monthly fees, so it is free to use, and 2. they reimburse you for any ATM fees for withdrawing money, you heard that right! So, if you\'re someone who likes to go to Vegas but doesn\'t want to pay $12 for every withdrawal, this could be a strong option for you. Now, for my international vacationers out there, this also applies overseas, so this could save you a lot of money depending on how often you\'d use this. The major drawback is, Charles Schwab does not have a lot of branches throughout the U.S, so if you need any in-person interactions and you don\'t live near a branch, you\'re out of luck. BUT... their phone customer service is exceptional, just an FYI.',
                'appLink': 'https://www.schwab.com/checking'
            },
            {
                'name': 'Ally Savings',
                'type': 'savings',
                'imgPath': '../../assets/allyLogo.png',
                'interestRate': 0.5,
                'monthlyFee': 0,
                'sub': 0,
                'overdraftFee': 0,
                'debitCard': 'No',
                'description': 'Ally is one of many online only banking options when it comes to High Yield Savings Accounts (HYSAs). Although they all are pretty similar and offer similar interest rates, Ally has something that can come in handy, should an emergency occur... Zelle. Having Zelle available with your savings account can come in clutch if something happens. Zelle essentially allows you to skip the 1-3 business day waiting period to transfer money out all the way down to a matter of refreshing the page at your other bank... Yes, that fast.',
                'appLink': 'https://google.com'
            }
        ];
    }
    get getChecking() {
        return this.bankAccounts.filter(x => x.type === 'checking');
    }
    get getSavings() {
        return this.bankAccounts.filter(x => x.type === 'savings');
    }
}
BankAccountsComponent.ɵfac = function BankAccountsComponent_Factory(t) { return new (t || BankAccountsComponent)(); };
BankAccountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BankAccountsComponent, selectors: [["app-bank-accounts"]], inputs: { bankAccounts: "bankAccounts" }, decls: 37, vars: 2, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], [1, "budget-content"], ["class", "cards", 4, "ngFor", "ngForOf"], ["id", "savings"], [2, "font-size", "0.9em", "font-style", "italic"], [1, "cards"], [1, "card"], [1, "card-image"], [2, "width", "200px", 3, "src", "alt"], [1, "card-content"], [1, "card-title"], [1, "card-text"], [1, "table", "table-striped", "table-hover"], [1, "card-readmore", 3, "href"], [3, "src", "alt"]], template: function BankAccountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bank Accounts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What kind of bank accounts are there?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "You may already know what kind of bank accounts there are out there. But did you know not all checking accounts are the same?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "The differences can be on things that benefit you, the customer, or it could be on negative aspects, such as fees. When it comes to checking accounts, some have higher monthly fees than other, while some don't have a monthly fee at all, and the same can be said about overdraft fees.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "As for savings accounts, they can offer you different interest rates. Most big banks in the U.S have a standard, extremely low, almost non-existing interest rate of a whopping 0.01%, but other banks (mostly online banks, as they don't have to spend extra money with physical locations, hiring bank tellers, etc.) offer much higher interest rates. The current average rate for those is around 0.5%, or 50x higher than the big, traditional banks. There was the good ol' days (like, a year and a half ago) that rates were 2%+, but that isn't the case anymore. And don't worry, they are all FDIC insured. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Now, let's take a look at our top picks, shall we?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Here are our top picks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Checking Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BankAccountsComponent_section_26_Template, 47, 20, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Savings Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BankAccountsComponent_section_31_Template, 47, 20, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "* There are ways to get the monthly fees waved. Check the banks websites for those qualifying activities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getChecking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getSavings);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n.cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: calc((600px - 100%) * 999);\n}\n.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.card[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background: white;\n  color: #000;\n  border-radius: 0.45em;\n  box-shadow: 3px 2px 14px rgba(38, 38, 49, 0.4);\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media only screen and (max-width: 800px) {\n  .cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    min-width: 280px;\n    max-width: 330px;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  background-size: cover;\n  justify-content: center;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  width: 100px;\n}\n@media only screen and (max-width: 800px) {\n  .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.card-text[_ngcontent-%COMP%] {\n  color: #0007;\n  font-style: 1.1rem;\n  width: 100%;\n}\n.card-readmore[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5em;\n  display: inline-flex;\n  text-decoration: none;\n  padding: 0.45em 1.05em;\n  border-radius: 0.45em;\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0);\n  color: #fff;\n  font-size: 1.1rem;\n  box-shadow: 0 0.5em 1.2em #0004;\n}\n#savings[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#quote[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 4.5em;\n  font-weight: lighter;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('bankAccountBanner.jpg');\n}\n@media only screen and (max-width: 800px) {\n  #quote[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJhbmstYWNjb3VudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1Esa0ZBQUE7QUEyQlI7RUFDRSxXQUFBO0VBQ0EsaUJBZFc7RUFlWCxjQUFBO0VBQ0EsZ0JBQUE7QUMxQkY7QURzQ0E7RUFDRSxXQUFBO0FDbkNGO0FEc0NBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBdENXO0VBdUNYLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDbkNGO0FEc0NBO0VBQ0UsY0FBQTtFQUNBLGlCQTlDVztFQStDWCxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtFQUNBLG9CQUFBO0FDcENGO0FEcUNFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuQ0o7QUQ3Qkk7RUE0REY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7RUNqQ0o7QUFDRjtBRG1DTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2pDUjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FDbENOO0FEb0NJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ2xDTjtBRG9DSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2xDTjtBRHVDQTtFQUNFLFdBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkE5R1c7RUErR1gsVUFBQTtBQ3BDRjtBRHVDQTtFQUVFLGFBQUE7RUFDQSxjQUFBO0FDckNGO0FEd0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QUN2Q0Y7QUQ0Q0E7O0VBRUUsc0JBQUE7RUFDQSxrQ0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDRDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDekNGO0FENENBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0FDekNGO0FENENBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQTlPVztBQ3FNYjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUN6Q0Y7RUQwQ0U7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUN4Q0o7RUR5Q0k7SUFDRSx3QkFBQTtFQ3ZDTjtFRHdDTTtJQUNFLGNBQUE7RUN0Q1I7RUR5Q007SUFDRSxxQkFBQTtFQ3ZDUjs7RUQ2Q0E7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUMxQ0Y7O0VENkNBO0lBQ0UsVUFBQTtFQzFDRjs7RUQ2Q0E7SUFDRSxrQkFBQTtFQzFDRjtBQUNGO0FEOENFO0VBQ0UsaUJBQUE7QUM1Q0o7QURnREE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUM3Q0Y7QURnREE7RUFFRTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDOUNGOztFRGlEQTtJQUNFLG9CQUFBO0VDOUNGO0FBQ0Y7QURpREE7RUFDRTtJQUNFLG1CQUFBO0VDL0NGO0FBQ0Y7QUE3UkE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQStSRjtBQTVSQTtFQUNFLFlBQUE7RUFDQSxzQ0FBQTtBQStSRjtBQTNSQTtFQUNFLGdCQUFBO0FBOFJGO0FBM1JBO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQThSRjtBQTdSRTtFQUNFLFdBQUE7QUErUko7QUEzUkE7RUFDSTtJQUNJLGVBQUE7RUE4Uk47O0VBM1JFO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQThSTjtBQUNGO0FBM1JBO0VBQ0UsY0FBQTtBQTZSRjtBQTFSQTtFQUNFLGdCQUFBO0FBNlJGO0FBMVJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE2UkY7QUEzUkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUE2Uko7QUF4UkU7RUFDRTtJQUNFLGlCQUFBO0VBMlJKO0FBQ0Y7QUF2UkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUEwUkY7QUF2UkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQTBSRjtBQXhSQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUEyUkY7QUF6UkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0RUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBNFJGO0FBelJBO0VBQ0UsZ0JBQUE7QUE0UkY7QUF6UkE7RUFDRSxrQkFBQTtBQTRSRjtBQTFSQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQTZSRjtBQTFSQTtFQUNFLDhDQUFBO0FBNlJGO0FBMVJBO0VBQ0U7SUFDRSxnQkFBQTtFQTZSRjtBQUNGIiwiZmlsZSI6ImJhbmstYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcInV0Zi04XCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKTtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kcGFnZS13aWR0aDogMTE0MHB4O1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMzkwMDtcclxuJGxpZ2h0LXJlZDogI2ZmZTVlMztcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAuaWNvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKG1lZGl1bSkge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSwgcCAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDN7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6MjJweDtcclxuICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLml0ZW0tbGlzdCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaSB7XHJcbiAgLy8gd2lkdGg6IDI2NXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxufSBcclxuXHJcbi5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgcGFkZGluZzozNXB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4uZG9tYWluLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDozMnB4O1xyXG59XHJcblxyXG4uaXRlbSBzcGFuIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDsgICAgXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5idG4gaSB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MDgwQjk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbn1cclxuXHJcbi5hY3Rpb24gYTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG59XHJcblxyXG4jcXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgICAgICAgXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweDsgICAgIFxyXG4gIH1cclxufVxyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbiNyZXNvdXJjZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6ICRwYWdlLXdpZHRoLzUwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMFwiKTtcbi5idWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xufVxuXG4uaWNvbi1zZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSwgLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEge1xuICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRvbWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbWFyZ2luLWxlZnQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MEI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XG59XG5cbi5hY3Rpb24gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59XG5cbiNxdW90ZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5idWRnZXQtY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcmVzb3VyY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMjIuOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB9XG59XG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jYXJkcyA+ICoge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IGNhbGMoKDYwMHB4IC0gMTAwJSkgKiA5OTkpO1xufVxuXG4uY2FyZHMgPiAuY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5jYXJkLCAuY2FyZC1ib3R0b20ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNDVlbTtcbiAgYm94LXNoYWRvdzogM3B4IDJweCAxNHB4IHJnYmEoMzgsIDM4LCA0OSwgMC40KTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNhcmQgLnRleHQsIC5jYXJkLWJvdHRvbSAudGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmNhcmRzID4gKiB7XG4gICAgbWluLXdpZHRoOiAyODBweDtcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xuICB9XG59XG4uY2FyZCB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY2FyZC1ib3R0b20ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1pbWFnZSwgLmNhcmQtaW1hZ2UtYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY2FyZC1pbWFnZSBpbWcsIC5jYXJkLWltYWdlLWJvdHRvbSBpbWcge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jYXJkLWltYWdlLWJvdHRvbSBpbWcge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgY29sb3I6ICMwMDA3O1xuICBmb250LXN0eWxlOiAxLjFyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1yZWFkbW9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDAuNDVlbSAxLjA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNDVlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDAsIDEzNiwgMC43NzQpLCAjNGMwMGZmLCAjMDAwMGMwKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBib3gtc2hhZG93OiAwIDAuNWVtIDEuMmVtICMwMDA0O1xufVxuXG4jc2F2aW5ncyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDQuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFua0FjY291bnRCYW5uZXIuanBnXCIpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNxdW90ZSB7XG4gICAgZm9udC1zaXplOiAyLjVlbTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _budget_calculator_budget_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget-calculator/budget-calculator.component */ "xra+");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "0PS2");
/* harmony import */ var _networth_networth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./networth/networth.component */ "6nXz");
/* harmony import */ var _credit_cards_credit_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credit-cards/credit-cards.component */ "R2Hc");
/* harmony import */ var _bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bank-accounts/bank-accounts.component */ "l795");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [
    { path: '', component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"] },
    { path: 'budget', component: _budget_calculator_budget_calculator_component__WEBPACK_IMPORTED_MODULE_2__["BudgetCalculatorComponent"] },
    { path: 'networth', component: _networth_networth_component__WEBPACK_IMPORTED_MODULE_4__["NetworthComponent"] },
    { path: 'credit-cards', component: _credit_cards_credit_cards_component__WEBPACK_IMPORTED_MODULE_5__["CreditCardsComponent"] },
    { path: 'bank-accounts', component: _bank_accounts_bank_accounts_component__WEBPACK_IMPORTED_MODULE_6__["BankAccountsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xra+":
/*!******************************************************************!*\
  !*** ./src/app/budget-calculator/budget-calculator.component.ts ***!
  \******************************************************************/
/*! exports provided: BudgetCalculatorComponent, isBudgetClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetCalculatorComponent", function() { return BudgetCalculatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBudgetClass", function() { return isBudgetClass; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BudgetCalculatorComponent {
    constructor() {
        this.budgetItems = new Array();
        this.totalBudget = 0;
        this.isBudget = true;
    }
    ngOnInit() {
    }
    deleteItem(item) {
        let index = this.budgetItems.indexOf(item);
        this.budgetItems.splice(index, 1);
        this.totalBudget -= item.amount;
    }
}
BudgetCalculatorComponent.ɵfac = function BudgetCalculatorComponent_Factory(t) { return new (t || BudgetCalculatorComponent)(); };
BudgetCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetCalculatorComponent, selectors: [["app-budget-calculator"]], decls: 47, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "budget-content"], ["id", "budget-first-p"], [1, "top-bar", "budget-content"], [3, "isBudget"], [1, "component-menu-list"], [1, "item-list"], ["href", "https://mint.intuit.com/"], [1, "title"], ["src", "../../assets/mint.png", "alt", "money icon", 1, "card-icon"], ["href", "https://www.youneedabudget.com/"], ["src", "../../assets/ynab.png", "alt", "money icon", 1, "card-icon"], ["href", "https://www.personalcapital.com/"], ["src", "../../assets/Personal-Capital-Logo.png", "alt", "money icon", 1, "card-icon"], ["href", "#"], ["src", "../../assets/Excel.png", "alt", "money icon", 1, "card-icon"]], template: function BudgetCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u201CA budget is telling your money where to go instead of wondering where it went.\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "John Maxwell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Why Should You Have a Budget?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "As the quote on the banner says, a budget enables you to know where your money is going instead of leaving you scratching your head wondering where it went.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Before any major financial decision, you need to assess your budget and run the numbers. If you already are on a routine of actively keeping track of your expenses, great! One less thing to do. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "How To Get Started?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "To have a general idea of what your spending looks like, feel free to play with the calculator below. It would also be a good idea to open up your bank statement for a month and input every penny coming in and leaving your account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "I am personally a fan of doing this manually, that way I know exaclty what, when, and how much something was. There are other options (linked below) that keeps track of this automatically for you, in case you don't have a whole lot of time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-budget-item-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Here Are a Few More In-Depth Options:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBudget", ctx.isBudget);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1140px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1140px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 35px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  margin: 0;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 26px;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  max-width: 1140px;\n  padding: 0;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1140px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#resources[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  letter-spacing: 22.8px;\n  border-bottom: 1px solid black;\n  padding-bottom: 40px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 15px;\n  }\n}\n@media only screen and (max-width: 350px) {\n  #resources[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1140px;\n  height: 68px;\n  margin: 0 auto;\n  margin-top: 25px;\n  display: flex;\n  align-items: center;\n}\n.total-budget-section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n  max-width: 1140px;\n  border-top: 2px solid #161c29;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0 auto;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff551a;\n}\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%] {\n  width: 1140px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(1) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(2) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(3) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(4) {\n  width: 300px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 148, 99, 0.774), rgba(0, 128, 145, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 128, 145, 0.774), rgba(0, 116, 116, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 116, 116, 0.774), rgba(0, 104, 165, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 104, 165, 0.774), rgba(0, 131, 136, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #8503a5, #9e019e);\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    flex-direction: row;\n  }\n\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  #budget-first-p[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n.component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('budget-banner.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJ1ZGdldC1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNRLGtGQUFBO0FBMkJSO0VBQ0UsV0FBQTtFQUNBLGlCQWRXO0VBZVgsY0FBQTtFQUNBLGdCQUFBO0FDMUJGO0FEc0NBO0VBQ0UsV0FBQTtBQ25DRjtBRHNDQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQXRDVztFQXVDWCxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ25DRjtBRHNDQTtFQUNFLGNBQUE7RUFDQSxpQkE5Q1c7RUErQ1gsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxvQkFBQTtBQ3BDRjtBRHFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkNKO0FEN0JJO0VBNERGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0VDakNKO0FBQ0Y7QURtQ007RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNqQ1I7QURvQ0k7RUFDRSxlQUFBO0VBQ0EsU0FBQTtBQ2xDTjtBRG9DSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUNsQ047QURvQ0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNsQ047QUR1Q0E7RUFDRSxXQUFBO0FDcENGO0FEdUNBO0VBQ0UsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcENGO0FEdUNBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBOUdXO0VBK0dYLFVBQUE7QUNwQ0Y7QUR1Q0E7RUFFRSxhQUFBO0VBQ0EsY0FBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDdkNGO0FENENBOztFQUVFLHNCQUFBO0VBQ0Esa0NBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDekNGO0FENENBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDekNGO0FENENBO0VBQ0UsV0FBQTtBQ3pDRjtBRDRDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxpQkE5T1c7QUNxTWI7QUQ0Q0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDekNGO0FENENBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDekNGO0VEMENFO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDeENKO0VEeUNJO0lBQ0Usd0JBQUE7RUN2Q047RUR3Q007SUFDRSxjQUFBO0VDdENSO0VEeUNNO0lBQ0UscUJBQUE7RUN2Q1I7O0VENkNBO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDMUNGOztFRDZDQTtJQUNFLFVBQUE7RUMxQ0Y7O0VENkNBO0lBQ0Usa0JBQUE7RUMxQ0Y7QUFDRjtBRDhDRTtFQUNFLGlCQUFBO0FDNUNKO0FEZ0RBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FDN0NGO0FEZ0RBO0VBRUU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQzlDRjs7RURpREE7SUFDRSxvQkFBQTtFQzlDRjtBQUNGO0FEaURBO0VBQ0U7SUFDRSxtQkFBQTtFQy9DRjtBQUNGO0FBN1JBO0VBQ0UsV0FBQTtFQUNBLGlCRFdXO0VDVlgsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtBQThSRjtBQTNSQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJERFM7RUNFVCw2QkFBQTtFQUVBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBNlJKO0FBMVJRO0VBQ0ksY0FBQTtBQTRSWjtBQXpSUTtFQUNJLGNBQUE7QUEyUlo7QUF0UkE7RUFDSSxhQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtBQXdSSjtBQXRSSTtFQUNJLGFEMUJLO0FDa1RiO0FBcFJBO0VBQ0UsWUFBQTtBQXVSRjtBQXBSQTtFQUNFLFlBQUE7QUF1UkY7QUFwUkE7RUFDRSxZQUFBO0FBdVJGO0FBcFJBO0VBQ0UsWUFBQTtBQXVSRjtBQXBSQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBdVJGO0FBblJJO0VBQ0UscUZBQUE7QUFzUk47QUFqUkk7RUFDRSxzRkFBQTtBQW9STjtBQS9RSTtFQUNFLHNGQUFBO0FBa1JOO0FBN1FJO0VBQ0Usc0ZBQUE7QUFnUk47QUEzUUk7RUFDRSxvREFBQTtBQThRTjtBQTFRRTtFQUNFO0lBQ0UsaUJBQUE7SUFFQSxtQkFBQTtFQTRRSjs7RUF4UUk7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7SUFFQSxVQUFBO0VBMFFOOztFQXRRRTtJQUNFLGlCQUFBO0VBeVFKO0FBQ0Y7QUFwUUk7RUFDRSxVQUFBO0FBc1FOO0FBbFFFO0VBQ0UsMENBQUE7QUFxUUoiLCJmaWxlIjoiYnVkZ2V0LWNhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcInV0Zi04XCI7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKTtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kcGFnZS13aWR0aDogMTE0MHB4O1xyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMzkwMDtcclxuJGxpZ2h0LXJlZDogI2ZmZTVlMztcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkcGFnZS13aWR0aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuICAuaWNvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKG1lZGl1bSkge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSwgcCAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG59XHJcblxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDN7XHJcbiAgZm9udC1zaXplOjI2cHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6MjJweDtcclxuICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgbWFyZ2luOjAgYXV0bztcclxufVxyXG5cclxuLml0ZW0tbGlzdCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIG1heC13aWR0aDogJHBhZ2Utd2lkdGg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaSB7XHJcbiAgLy8gd2lkdGg6IDI2NXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxufSBcclxuXHJcbi5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoyNjdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgcGFkZGluZzozNXB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuICBcclxuICBcclxuICBcclxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOjIycHg7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4uZG9tYWluLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToyNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDozMnB4O1xyXG59XHJcblxyXG4uaXRlbSBzcGFuIHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDsgICAgXHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcbi5idG4gaSB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWN0aW9uIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM4MDgwQjk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbn1cclxuXHJcbi5hY3Rpb24gYTpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBibG9jazsgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICBtYXgtd2lkdGg6ICRwYWdlLXdpZHRoO1xyXG59XHJcblxyXG4jcXVvdGUge1xyXG4gIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcbiBcclxuICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgICAgICAgXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDUwcHggMTVweDsgICAgIFxyXG4gIH1cclxufVxyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICBoMSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbiNyZXNvdXJjZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIuNWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6ICRwYWdlLXdpZHRoLzUwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gXHJcbiAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcblxyXG4gICNyZXNvdXJjZXMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KSB7XHJcbiAgI3Jlc291cmNlcyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMFwiKTtcbi5idWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xufVxuXG4uaWNvbi1zZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSwgLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEge1xuICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRvbWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbWFyZ2luLWxlZnQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MEI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XG59XG5cbi5hY3Rpb24gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG59XG5cbiNxdW90ZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxuXG4gIC5jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5idWRnZXQtY29udGVudCBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jcmVzb3VyY2VzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIuNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMjIuOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAjcmVzb3VyY2VzIHtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICB9XG59XG4udG9wLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNDBweDtcbiAgaGVpZ2h0OiA2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTYxYzI5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50b3RhbC1idWRnZXQtc2VjdGlvbiBoMi5ncmVlbiB7XG4gIGNvbG9yOiAjMGFmZmFiO1xufVxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIGgyLnJlZCB7XG4gIGNvbG9yOiAjZmY1NTFhO1xufVxuXG4uYWRkLWl0ZW0tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC1pdGVtLXNlY3Rpb24gLmFkZC1pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMTQwcHg7XG59XG5cbi5jYXJkLWljb246bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZC1pY29uOm50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmNhcmQtaWNvbjpudGgtY2hpbGQoMykge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5jYXJkLWljb246bnRoLWNoaWxkKDQpIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDEpIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMTQ4LCA5OSwgMC43NzQpLCByZ2JhKDAsIDEyOCwgMTQ1LCAwLjc3NCkpO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCgyKSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDEyOCwgMTQ1LCAwLjc3NCksIHJnYmEoMCwgMTE2LCAxMTYsIDAuNzc0KSk7XG59XG5cbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDMpIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMTE2LCAxMTYsIDAuNzc0KSwgcmdiYSgwLCAxMDQsIDE2NSwgMC43NzQpKTtcbn1cblxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoNCkgYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgcmdiYSgwLCAxMDQsIDE2NSwgMC43NzQpLCByZ2JhKDAsIDEzMSwgMTM2LCAwLjc3NCkpO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCg1KSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjODUwM2E1LCAjOWUwMTllKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICNidWRnZXQtZmlyc3QtcCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbn1cbi5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9idWRnZXQtYmFubmVyLmpwZ1wiKTtcbn0iXX0= */"] });
class isBudgetClass {
    constructor() {
        this.isBudget = true;
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map