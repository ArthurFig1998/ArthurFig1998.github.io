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
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 52, vars: 0, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "icon-set"], [1, "icon-item"], [1, "icon-item", "last"], [1, "clearfix"], [1, "component-menu-list"], [1, "item-list"], ["routerLink", "budget", 3, "click"], [1, "title"], ["src", "../../assets/money.png", "alt", "money icon", 1, "card-icon"], [1, "item"], ["routerLink", "networth", 3, "click"], ["src", "../../assets/piggy-bank.png", "alt", "money icon", 1, "card-icon"], ["routerLink", "credit-cards", 3, "click"], ["src", "../../assets/credit.png", "alt", "money icon", 1, "card-icon"], ["routerLink", "bank-accounts", 3, "click"], ["src", "../../assets/bank.png", "alt", "money icon", 1, "card-icon"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fugiat iusto eveniet quaerat aliquam quas similique expedita, molestias fugiat expedita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Set Goals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat non molestias fugiat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Stick To The Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cumque repellat non molestias fugiat iusto eveniet quaerat aliquam quas similique expedita.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_29_listener() { return ctx.setTitle("Arthur Figueiredo | Budget Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_35_listener() { return ctx.setTitle("Arthur Figueiredo | Net Worth Calculator"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Networth Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_41_listener() { return ctx.setTitle("Arthur Figueiredo | Credit Card Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Credit Cards Picks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_a_click_47_listener() { return ctx.setTitle("Arthur Figueiredo | Bank Account Picks"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Bank Account Picks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,900\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n}\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('main-banner.jpg');\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #4c00ff, #0000c0);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #0000c0, #4f017c);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #4f017c, #8503a5);\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #8503a5, #9e019e);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1haW4tcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUNBLHlFQUFBO0FBQ0EseUZBQUE7QUNFQSxrRkFBQTtBQWtDUjtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRGpDRjtBQ29EQTtFQUNJLFdBQUE7QURqREo7QUNvREE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FEakRGO0FDb0RBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FEakRGO0FDa0RFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QURoREo7QUM1Qkk7RUF3RUY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtFRDlDSjtBQUNGO0FDK0NJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBbkZVO0VBb0ZWLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUQ3Q047QUM4Q007RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUQ1Q1Y7QUM2Q1U7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUQzQ1o7QUMrQ0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUQ3Q047QUMrQ0k7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUQ3Q047QUMrQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRDdDTjtBQ2dERTtFQUNFLGtCQUFBO0FEOUNKO0FDZ0RFO0VBQ0UsbUJBQUE7QUQ5Q0o7QUNnREU7RUFDRSxtQkFBQTtBRDlDSjtBQ2tEQTtFQUNFLFdBQUE7QUQvQ0Y7QUNtREU7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RURoREo7RUNpREk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUQvQ047RUNnRE07SUFDRSx3QkFBQTtFRDlDUjtFQytDUTtJQUNFLGNBQUE7RUQ3Q1Y7RUNnRFE7SUFDRSxxQkFBQTtFRDlDVjtBQUNGO0FDbURFO0VBQ0UsbUJBQUE7QURqREo7QUNtREU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURoREo7QUNrREU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEL0NKO0FDaURFO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FEL0NOO0FDaURFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FEOUNKO0FDZ0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSw2QkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QURqREo7QUNzREU7O0VBR0kscUJBQUE7RUFDQSxrQ0FBQTtBRHBETjtBQ3VERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURwREo7QUNzREU7RUFDRSxtQkFBQTtBRG5ESjtBQ3FERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURsREo7QUNvREU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEakRKO0FDb0RFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRGpESjtBQ21ERTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FEaERKO0FDa0RFO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBRC9DTjtBQ2lERTtFQUNFLHFCQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBRDlDUjtBQ2dERTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBRDdDSjtBQ2tERTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VEL0NKOztFQ2tERTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEL0NKO0FBQ0Y7QUNtREU7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBRGpESjtBQ3FEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FEbERKO0FDcURBO0VBQ0ksV0FBQTtBRGxESjtBQ3FEQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsdUJBQUE7QURuREo7QUNzREE7RUFDSSxpQkFBQTtBRG5ESjtBQ3NEQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QURuREo7QUN5REE7RUFDSTtJQUNJLFVBQUE7RUR0RE47O0VDeURFO0lBQ0ksa0JBQUE7RUR0RE47QUFDRjtBQW5TQTtFQUNFLGdCQUFBO0FBcVNGO0FBalNFO0VBQ0UsbUJBQUE7QUFvU0o7QUFoU0E7RUFDRSx3Q0FBQTtBQW1TRjtBQS9SRTtFQUNFLG1FQUFBO0FBa1NKO0FBN1JFO0VBQ0Usb0RBQUE7QUFnU0o7QUEzUkU7RUFDRSxvREFBQTtBQThSSjtBQXpSRTtFQUNFLG9EQUFBO0FBNFJKO0FBdlJFO0VBQ0Usb0RBQUE7QUEwUkoiLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw5MDAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS81LjE1LjMvY3NzL2FsbC5taW4uY3NzJyk7XHJcbkBpbXBvcnQgJy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9tYWluLWJhbm5lci5qcGcnKTtcclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoMSkge1xyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDAsIDEzNiwgMC43NzQpLCByZ2IoNzYsIDAsIDI1NSkpOyBcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZyxyZ2IoNzYsIDAsIDI1NSksIHJnYigwLCAwLCAxOTIpKTtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDMpIHtcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZyxyZ2IoMCwgMCwgMTkyKSwgcmdiKDc5LCAxLCAxMjQpKTtcclxuICB9XHJcbn1cclxuXHJcbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDQpIHtcclxuICBhIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZyxyZ2IoNzksIDEsIDEyNCksIHJnYigxMzMsIDMsIDE2NSkpO1xyXG4gIH1cclxufVxyXG5cclxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoNSkge1xyXG4gIGEge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLHJnYigxMzMsIDMsIDE2NSksIHJnYigxNTgsIDEsIDE1OCkpO1xyXG4gIH1cclxufSIsIi8vR2xvYmFsIHN0eWxlcyBhbmQgdmFyaWFibGVzXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAvLyBJZiB0aGUga2V5IGV4aXN0cyBpbiB0aGUgbWFwXHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgIC8vIFByaW50cyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIHRoZSB2YWx1ZVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiRwcmltYXJ5LWNvbG9yOiAjMTlENERFO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzM5MDA7XHJcbiRsaWdodC1yZWQ6ICNmZmU1ZTM7XHJcblxyXG4vLyAkcGluazogI0ZBN0M5MTtcclxuLy8gJGJyb3duOiAjNzU3NzYzO1xyXG4vLyAkYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XHJcbi8vICRiZWlnZS1saWdodGVyOiAjRUZGMEVCO1xyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuLy8gJGdyZXktZGFyazogJGJyb3duO1xyXG4vLyAkZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwdXJwbGU7XHJcbi8vICR3aWRlc2NyZWVuLWVuYWJsZWQ6IGZhbHNlO1xyXG4vLyAkZnVsbGhkLWVuYWJsZWQ6IGZhbHNlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgfVxyXG4gIFxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XHJcbiAgLmljb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41ZW07XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50IChtZWRpdW0pIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDsgXHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXJcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEsIHAgIHtcclxuICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzozcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW0ubGFzdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICB9XHJcbiAgLmljb24taXRlbTpudGgtb2YtdHlwZSgzKSAuaWNvbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206ODBweDtcclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgze1xyXG4gICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6MjJweDtcclxuICAgIG1heC13aWR0aDo0NjBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgfVxyXG4gIC5pdGVtLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgfVxyXG4gIC5pdGVtLWxpc3QgbGkge1xyXG4gICAgd2lkdGg6MjY1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOjAgMTBweDtcclxuICB9IFxyXG4gIC5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjI2N3B4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1ZGVnLCM1MzkwRDksIHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyMTY3ZmYsICM4OGFkZmYsICNhZWYwZmYsICNhZWYwZmYsICNiZGVmZmEsICNlM2Y4ZmQsICNlZWZjZmYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgcGFkZGluZzozNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbiAgLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcclxuICAvLyAgIGJhY2tncm91bmQ6IzI0MjQ4NjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gIH1cclxuICAuZG9tYWluLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206MzVweDtcclxuICB9XHJcbiAgLml0ZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6MzJweDtcclxuICB9XHJcbiAgLml0ZW0gc3BhbiB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICBcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIG1hcmdpbi10b3A6YXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICB9XHJcbiAgLmJ0biBpIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBtYXJnaW4tbGVmdDtcclxuICB9XHJcbiAgLmFjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmFjdGlvbiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwQjk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MDgwQjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICB9XHJcbiAgXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNDYwcHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcclxufVxyXG5cclxuI3F1b3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTVweDtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Networth Calculator");
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
NetworthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NetworthComponent, selectors: [["app-networth"]], decls: 73, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "budget-content"], [1, "top-bar", "budget-content"], [3, "isBudget"], [1, "budget-content", "table-responsive"], [1, "table", "table-striped", "table-hover"], [1, "thead-light"], ["scope", "col"]], template: function NetworthComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam odio. Nulla nec convallis purus. Quisque libero odio, condimentum eu arcu non, molestie fermentum augue. Praesent sit amet sollicitudin urna, quis accumsan enim. Aliquam consectetur purus at arcu rutrum, et ornare dui hendrerit. Phasellus ac lectus at nunc cursus faucibus. Integer hendrerit fermentum lacus, sit amet congue mauris porttitor nec. Vestibulum pharetra dictum metus, nec auctor nulla fringilla at. Etiam gravida suscipit quam, in commodo est fringilla eu. Sed porttitor hendrerit mi, pellentesque blandit orci. Ut vel massa et dui rutrum elementum ut pulvinar lacus. Vivamus massa dui, hendrerit nec nibh eget, tempus mollis ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Why Is It Important to Know Your Net Worth?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam odio. Nulla nec convallis purus. Quisque libero odio, condimentum eu arcu non, molestie fermentum augue. Praesent sit amet sollicitudin urna, quis accumsan enim. Aliquam consectetur purus at arcu rutrum, et ornare dui hendrerit. Phasellus ac lectus at nunc cursus faucibus. Integer hendrerit fermentum lacus, sit amet congue mauris porttitor nec. Vestibulum pharetra dictum metus, nec auctor nulla fringilla at..");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "So... How Do You Compare to the Rest of the U.S?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Data used from the University of California Berkeley - Survey Documentation and Analysis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "thead", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Median");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "20s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "$56,984");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "$6,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "30s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "$174,002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "$32,600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "40s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "$457,783");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$93,460");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "50s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "$998,416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "$152,400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "60s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "$1,121,534");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "$221,200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBudget", ctx.isBudget);
    } }, directives: [_budget_item_list_budget_item_list_component__WEBPACK_IMPORTED_MODULE_1__["BudgetItemListComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  height: 68px;\n  margin: 0 auto;\n  margin-top: 25px;\n  display: flex;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n  font-family: \"Lato\";\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #161c29;\n}\ntable[_ngcontent-%COMP%] {\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: x-large;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: large;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('networth-banner.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXG5ldHdvcnRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGtGQUFBO0FBa0NSO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcENGO0FEdURBO0VBQ0ksV0FBQTtBQ3BESjtBRHVEQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUNwREY7QUR1REE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNwREY7QURxREU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ25ESjtBRHpCSTtFQXdFRjtJQU1JLFVBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDakRKO0FBQ0Y7QURrREk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFuRlU7RUFvRlYsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2hETjtBRGlETTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQy9DVjtBRGdEVTtFQUNFLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzlDWjtBRGtESTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2hETjtBRGtESTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2hETjtBRGtESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDaEROO0FEbURFO0VBQ0Usa0JBQUE7QUNqREo7QURtREU7RUFDRSxtQkFBQTtBQ2pESjtBRG1ERTtFQUNFLG1CQUFBO0FDakRKO0FEcURBO0VBQ0UsV0FBQTtBQ2xERjtBRHNERTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ25ESjtFRG9ESTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtFQ2xETjtFRG1ETTtJQUNFLHdCQUFBO0VDakRSO0VEa0RRO0lBQ0UsY0FBQTtFQ2hEVjtFRG1EUTtJQUNFLHFCQUFBO0VDakRWO0FBQ0Y7QURzREU7RUFDRSxtQkFBQTtBQ3BESjtBRHNERTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ25ESjtBRHFERTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNsREo7QURvREU7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUNsRE47QURvREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNqREo7QURtREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLCtDQUFBO0VBQ0Esa0NBQUE7RUFFQSxxQkFBQTtBQ3BESjtBRHlERTs7RUFHSSxxQkFBQTtFQUNBLGtDQUFBO0FDdkROO0FEMERFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3ZESjtBRHlERTtFQUNFLG1CQUFBO0FDdERKO0FEd0RFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3JESjtBRHVERTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNwREo7QUR1REU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDcERKO0FEc0RFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNuREo7QURxREU7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbEROO0FEb0RFO0VBQ0UscUJBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDakRSO0FEbURFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDaERKO0FEcURFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNsREo7O0VEcURFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNsREo7QUFDRjtBRHNERTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDcERKO0FEd0RBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNyREo7QUR3REE7RUFDSSxXQUFBO0FDckRKO0FEd0RBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQ3RESjtBRHlEQTtFQUNJLGlCQUFBO0FDdERKO0FEeURBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ3RESjtBRDREQTtFQUNJO0lBQ0ksVUFBQTtFQ3pETjs7RUQ0REU7SUFDSSxrQkFBQTtFQ3pETjtBQUNGO0FBblNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFLQSxtQkFBQTtBQWlTSjtBQS9SSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjRElEO0FDNlJQO0FBN1JBO0VBQ0ksa0JBQUE7QUFnU0o7QUE5Ukk7RUFDSSxrQkFBQTtBQWdTUjtBQTdSSTtFQUNJLGdCQUFBO0FBK1JSO0FBM1JBO0VBQ0ksNENBQUE7QUE4UkoiLCJmaWxlIjoibmV0d29ydGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBzdHlsZXMgYW5kIHZhcmlhYmxlc1xyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgLy8gSWYgdGhlIGtleSBleGlzdHMgaW4gdGhlIG1hcFxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBQcmludHMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiB0aGUgdmFsdWVcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gJHBpbms6ICNGQTdDOTE7XHJcbi8vICRicm93bjogIzc1Nzc2MztcclxuLy8gJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4vLyAkYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICRncmV5LWRhcms6ICRicm93bjtcclxuLy8gJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4vLyAkd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuLy8gJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gIH1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7IFxyXG4gICAgICAubG5yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvZmluYW5jaWFsLXN0YXRlbWVudC5wbmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDoyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1pdGVtLmxhc3Qge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDIpIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMykgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMzAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IGxpIHtcclxuICAgIHdpZHRoOjI2NXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjowIDEwcHg7XHJcbiAgfSBcclxuICAuaXRlbS1saXN0IGxpIGEge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoyNjdweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywjNTM5MEQ5LCB3aGl0ZSwgd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjE2N2ZmLCAjODhhZGZmLCAjYWVmMGZmLCAjYWVmMGZmLCAjYmRlZmZhLCAjZTNmOGZkLCAjZWVmY2ZmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIHBhZGRpbmc6MzVweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4gIC5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiMyNDI0ODY7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICB9XHJcbiAgLmRvbWFpbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjMycHg7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgfVxyXG4gIC5idG4gaSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbiAgfVxyXG4gIC5hY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MEI5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG4gIH1cclxuICAuYWN0aW9uIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE5RDRERTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxucjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbS5sYXN0IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzExOTI5OTtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDMpIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwYTUxNTQ7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICB3aWR0aDogMjY1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxufVxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDEwODBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi50b3AtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBoZWlnaHQ6IDY4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1iYXIgaDEge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE2MWMyOTtcbn1cblxudGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG50YWJsZSB0aCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbnRhYmxlIHRkIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbmV0d29ydGgtYmFubmVyLmpwZ1wiKTtcbn0iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.root[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n.root[_ngcontent-%COMP%]:hover   .x-icon-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  background: #161c29;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  right: -17px;\n  top: -17px;\n  transition: opacity 0.2s ease-in, transform 0.2s ease-in;\n  transform: scale(0);\n  opacity: 0;\n  cursor: pointer;\n}\n.root[_ngcontent-%COMP%]   .x-icon-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.budget-item[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  background-color: #f5f5f5;\n  padding: 10px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in;\n}\n.budget-item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.budget-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  font-size: 18px;\n  margin-left: 5px;\n  align-items: center;\n}\n.budget-item[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  padding: 5px;\n  border-radius: 3px;\n}\n.expense[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n.expense[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #ffe5e3;\n}\n.income[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.income[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background-color: #bafacd;\n}\n#edit[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.mobile-functionality[_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (max-width: 800px) {\n  .mobile-functionality[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    margin-top: 5px;\n  }\n  .mobile-functionality[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 7.5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLXN0eWxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGJ1ZGdldC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsa0ZBQUE7QUFrQ1I7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQ0Y7QUR1REE7RUFDSSxXQUFBO0FDcERKO0FEdURBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3BERjtBRHVEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BERjtBRHFERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkRKO0FEekJJO0VBd0VGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsNEJBQUE7RUNqREo7QUFDRjtBRGtESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQW5GVTtFQW9GVixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDaEROO0FEaURNO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDL0NWO0FEZ0RVO0VBQ0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDOUNaO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDaEROO0FEa0RJO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDaEROO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoRE47QURtREU7RUFDRSxrQkFBQTtBQ2pESjtBRG1ERTtFQUNFLG1CQUFBO0FDakRKO0FEbURFO0VBQ0UsbUJBQUE7QUNqREo7QURxREE7RUFDRSxXQUFBO0FDbERGO0FEc0RFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDbkRKO0VEb0RJO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDbEROO0VEbURNO0lBQ0Usd0JBQUE7RUNqRFI7RURrRFE7SUFDRSxjQUFBO0VDaERWO0VEbURRO0lBQ0UscUJBQUE7RUNqRFY7QUFDRjtBRHNERTtFQUNFLG1CQUFBO0FDcERKO0FEc0RFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkRKO0FEcURFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2xESjtBRG9ERTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ2xETjtBRG9ERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2pESjtBRG1ERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDcERKO0FEeURFOztFQUdJLHFCQUFBO0VBQ0Esa0NBQUE7QUN2RE47QUQwREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkRKO0FEeURFO0VBQ0UsbUJBQUE7QUN0REo7QUR3REU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckRKO0FEdURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3BESjtBRHVERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNwREo7QURzREU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ25ESjtBRHFERTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNsRE47QURvREU7RUFDRSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNqRFI7QURtREU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNoREo7QURxREU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ2xESjs7RURxREU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2xESjtBQUNGO0FEc0RFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNwREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ3JESjtBRHdEQTtFQUNJLFdBQUE7QUNyREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDdERKO0FEeURBO0VBQ0ksaUJBQUE7QUN0REo7QUR5REE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDdERKO0FENERBO0VBQ0k7SUFDSSxVQUFBO0VDekROOztFRDRERTtJQUNJLGtCQUFBO0VDekROO0FBQ0Y7QUFuU0E7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBcVNKO0FBbFNRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBb1NaO0FBaFNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJETUQ7RUNMQyx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWlTUjtBQS9SUTtFQUNJLHFCQUFBO0FBaVNaO0FBNVJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkRoQlM7RUNpQlQsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHlDQUFBO0FBOFJKO0FBN1JJO0VBQ0kseUJBQUE7QUErUlI7QUE1Ukk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUdBLG1CQUFBO0FBNFJSO0FBelJJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBMlJSO0FBdFJJO0VBQ0ksY0R0Q0Y7QUMrVE47QUF0Ukk7RUFDSSx5QkR6Q0k7QUNpVVo7QUFwUkk7RUFDSSxjRGxEQTtBQ3lVUjtBQXBSSTtFQUNJLHlCRHJETTtBQzJVZDtBQWxSQTtFQUNJLFdBQUE7QUFxUko7QUFsUkE7RUFDSSxhQUFBO0FBcVJKO0FBbFJBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBcVJOO0VBblJNO0lBQ0ksaUJBQUE7SUFDQSxvQkFBQTtFQXFSVjtBQUNGIiwiZmlsZSI6ImJ1ZGdldC1pdGVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBzdHlsZXMgYW5kIHZhcmlhYmxlc1xyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgLy8gSWYgdGhlIGtleSBleGlzdHMgaW4gdGhlIG1hcFxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBQcmludHMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiB0aGUgdmFsdWVcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gJHBpbms6ICNGQTdDOTE7XHJcbi8vICRicm93bjogIzc1Nzc2MztcclxuLy8gJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4vLyAkYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICRncmV5LWRhcms6ICRicm93bjtcclxuLy8gJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4vLyAkd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuLy8gJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gIH1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7IFxyXG4gICAgICAubG5yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvZmluYW5jaWFsLXN0YXRlbWVudC5wbmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDoyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1pdGVtLmxhc3Qge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDIpIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMykgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMzAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IGxpIHtcclxuICAgIHdpZHRoOjI2NXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjowIDEwcHg7XHJcbiAgfSBcclxuICAuaXRlbS1saXN0IGxpIGEge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoyNjdweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywjNTM5MEQ5LCB3aGl0ZSwgd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjE2N2ZmLCAjODhhZGZmLCAjYWVmMGZmLCAjYWVmMGZmLCAjYmRlZmZhLCAjZTNmOGZkLCAjZWVmY2ZmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIHBhZGRpbmc6MzVweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4gIC5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiMyNDI0ODY7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICB9XHJcbiAgLmRvbWFpbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjMycHg7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgfVxyXG4gIC5idG4gaSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbiAgfVxyXG4gIC5hY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MEI5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG4gIH1cclxuICAuYWN0aW9uIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE5RDRERTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxucjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbS5sYXN0IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzExOTI5OTtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDMpIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwYTUxNTQ7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICB3aWR0aDogMjY1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxufVxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDEwODBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5yb290IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yb290OmhvdmVyIC54LWljb24tYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5yb290IC54LWljb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAzNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMxNjFjMjk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9kZWxldGVfaWNvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcmlnaHQ6IC0xN3B4O1xuICB0b3A6IC0xN3B4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbiwgdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvb3QgLngtaWNvbi1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbi5idWRnZXQtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW47XG59XG4uYnVkZ2V0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLmJ1ZGdldC1pdGVtIC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ1ZGdldC1pdGVtIC5hbW91bnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmV4cGVuc2UgcCB7XG4gIGNvbG9yOiAjZGMzOTAwO1xufVxuLmV4cGVuc2UgLmFtb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU1ZTM7XG59XG5cbi5pbmNvbWUgcCB7XG4gIGNvbG9yOiAjMDBjYzg2O1xufVxuLmluY29tZSAuYW1vdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZmFjZDtcbn1cblxuI2VkaXQge1xuICB3aWR0aDogMjBweDtcbn1cblxuLm1vYmlsZS1mdW5jdGlvbmFsaXR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubW9iaWxlLWZ1bmN0aW9uYWxpdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgLm1vYmlsZS1mdW5jdGlvbmFsaXR5IC5lZGl0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcbiAgfVxufSJdfQ== */"] });


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
    constructor() { }
    ngOnInit() {
    }
}
FooterContentComponent.ɵfac = function FooterContentComponent_Factory(t) { return new (t || FooterContentComponent)(); };
FooterContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterContentComponent, selectors: [["app-footer-content"]], decls: 6, vars: 0, consts: [[1, "disclosure", "budget-content"]], template: function FooterContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Editorial Note: Opinions expressed here are the author's alone, not those of any bank, credit card issuer, airlines or hotel chain, vendors or companies, and have not been reviewed, approved, or otherwise endorsed by any of these entities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Disclaimer: Content on this page represents one individual\u2019s experiences and viewpoints, and your experience may differ. The owner of this site is not an investment advisor, financial planner, nor a legal or tax professional. Articles here are of an opinion and general nature and should not be relied upon for individual circumstances. Research and obtain professional advice regarding all credit decisions before attempting to duplicate any of the techniques described on this website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".disclosure[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  justify-content: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJmb290ZXItY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNjbG9zdXJlIHtcclxuICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSJdfQ== */"] });


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


function CreditCardsComponent_div_163_Template(rf, ctx) { if (rf & 1) {
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
CreditCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditCardsComponent, selectors: [["app-credit-cards"]], inputs: { creditCards: "creditCards" }, decls: 164, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], [1, "budget-content"], [1, "cards"], [1, "card"], [1, "card-image"], ["src", "../../assets/chaseCFF.png", "alt", ""], [1, "card-content"], [1, "card-title"], [1, "card-text"], [1, "table", "table-striped", "table-hover"], ["href", "https://www.referyourchasecard.com/18g/6BMU39STBP", 1, "card-readmore"], ["src", "../../assets/AmexPlatinum.png", "alt", ""], ["href", "http://refer.amex.us/ARTHUFcqTE?xl=cp106r", 1, "card-readmore"], ["src", "../../assets/boaCashRewards.png", "alt", ""], ["href", "https://secure.bankofamerica.com/apply-credit-cards/public/icai-single/#/info/", 1, "card-readmore"], ["class", "card-bottom", 4, "ngFor", "ngForOf"], [1, "card-bottom"], [1, "card-image-bottom"], [3, "src", "alt"], [1, "card-readmore", 3, "href"]], template: function CreditCardsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "If I could only have 3 credit cards, what would they be...?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam odio. Nulla nec convallis purus. Quisque libero odio, condimentum eu arcu non, molestie fermentum augue. Praesent sit amet sollicitudin urna, quis accumsan enim. Aliquam consectetur purus at arcu rutrum, et ornare dui hendrerit. Phasellus ac lectus at nunc cursus faucibus. Integer hendrerit fermentum lacus, sit amet congue mauris porttitor nec. Vestibulum pharetra dictum metus, nec auctor nulla fringilla at.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Chase Freedom Flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "5% - Chase Travel Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "5% - Rotating Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "3% - Dining & Drugstores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cashback is paid as Chase Ultimate Rewards Points, which can be used for greater value through transfers partners, if you get one of the Sapphire cards later on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "$200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$500 in 3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "$0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "0% for the first 15 months, then 14.99%-23.74%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "American Express Platinum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "5X - Airfare (booked directly w/ airline)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "5X - Travel (through AmexTravel portal)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "- Marriot & Hilton hotel status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "- Airport lounge access");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "- Amex Fine Hotels & Resorts + The Hotel Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "- Various statement credits for different merchants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "100-125K MR points");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "$6,000 in 6 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "$695");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "15.99%-22.99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Bank of America Customized Cash Rewards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Rewards Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "3% - One category of your choice (gas, online shopping, dining, travel, drug stores, or home improvement/furnishings).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "2% - grocery stores and wholesale clubs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Other Key Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Bank of America has a boost for credit cards earning through their Preferred Rewards program. It does require you to have a substantial amount of money with Bank of America. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Intro Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "$200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Spending Requirement for Bonus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "$1000 in 3 months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Annual Fee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "$0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "APR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "13.99%-23.99%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Learn More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Here are a few other personal recommendations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, CreditCardsComponent_div_163_Template, 8, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.creditCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: flex;\n  justify-content: center;\n  background: #10101040;\n  line-height: 1.3;\n}\n.cards[_ngcontent-%COMP%] {\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n.cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: calc((600px - 100%) * 999);\n  min-width: 280px;\n  max-width: 330px;\n}\n.card[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background: white;\n  color: #000;\n  border-radius: 0.45em;\n  box-shadow: 3px 2px 14px rgba(38, 38, 49, 0.4);\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  background-size: cover;\n  justify-content: center;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  width: 200px;\n}\n@media only screen and (max-width: 800px) {\n  .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.card-text[_ngcontent-%COMP%] {\n  color: #0007;\n  font-style: 1.1rem;\n  width: 100%;\n}\n.card-readmore[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5em;\n  display: inline-flex;\n  text-decoration: none;\n  padding: 0.45em 1.05em;\n  border-radius: 0.45em;\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0);\n  color: #fff;\n  font-size: 1.1rem;\n  box-shadow: 0 0.5em 1.2em #0004;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#quote[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 4.5em;\n  font-weight: lighter;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('creditCardBanner.jpg');\n}\n@media only screen and (max-width: 800px) {\n  #quote[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGNyZWRpdC1jYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUSxrRkFBQTtBQWtDUjtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3BDRjtBRHVEQTtFQUNJLFdBQUE7QUNwREo7QUR1REE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FDcERGO0FEdURBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDcERGO0FEcURFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNuREo7QUR6Qkk7RUF3RUY7SUFNSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtFQ2pESjtBQUNGO0FEa0RJO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBbkZVO0VBb0ZWLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNoRE47QURpRE07RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUMvQ1Y7QURnRFU7RUFDRSxnREFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUM5Q1o7QURrREk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNoRE47QURrREk7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNoRE47QURrREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2hETjtBRG1ERTtFQUNFLGtCQUFBO0FDakRKO0FEbURFO0VBQ0UsbUJBQUE7QUNqREo7QURtREU7RUFDRSxtQkFBQTtBQ2pESjtBRHFEQTtFQUNFLFdBQUE7QUNsREY7QURzREU7RUFDRTtJQUNFLGFBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7RUNuREo7RURvREk7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUNsRE47RURtRE07SUFDRSx3QkFBQTtFQ2pEUjtFRGtEUTtJQUNFLGNBQUE7RUNoRFY7RURtRFE7SUFDRSxxQkFBQTtFQ2pEVjtBQUNGO0FEc0RFO0VBQ0UsbUJBQUE7QUNwREo7QURzREU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNuREo7QURxREU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbERKO0FEb0RFO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0FDbEROO0FEb0RFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDakRKO0FEbURFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSw2QkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQ0FBQTtFQUNBLGtDQUFBO0VBRUEscUJBQUE7QUNwREo7QUR5REU7O0VBR0kscUJBQUE7RUFDQSxrQ0FBQTtBQ3ZETjtBRDBERTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN2REo7QUR5REU7RUFDRSxtQkFBQTtBQ3RESjtBRHdERTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNyREo7QUR1REU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDcERKO0FEdURFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ3BESjtBRHNERTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FDbkRKO0FEcURFO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ2xETjtBRG9ERTtFQUNFLHFCQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ2pEUjtBRG1ERTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ2hESjtBRHFERTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDbERKOztFRHFERTtJQUNFLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDbERKO0FBQ0Y7QURzREU7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ3BESjtBRHdEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDckRKO0FEd0RBO0VBQ0ksV0FBQTtBQ3JESjtBRHdEQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBRUEsdUJBQUE7QUN0REo7QUR5REE7RUFDSSxpQkFBQTtBQ3RESjtBRHlEQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUN0REo7QUQ0REE7RUFDSTtJQUNJLFVBQUE7RUN6RE47O0VENERFO0lBQ0ksa0JBQUE7RUN6RE47QUFDRjtBQW5TQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQXFTRjtBQWxTQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBcVNGO0FBbFNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBcVNGO0FBblNBO0VBQ0UsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXNTRjtBQW5TQTtFQUVFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7QUFxU0Y7QUFwU0U7RUFDRSxXQUFBO0FBc1NKO0FBbFNBO0VBQ0UsY0FBQTtBQXFTRjtBQWxTQTtFQUNFLGdCQUFBO0FBcVNGO0FBbFNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7QUFvU0Y7QUFsU0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFvU0o7QUEvUkU7RUFDRTtJQUNFLGlCQUFBO0VBa1NKO0FBQ0Y7QUE5UkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFpU0Y7QUE5UkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWlTRjtBQS9SQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUdBLFdBQUE7QUFnU0Y7QUE3UkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0RUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBZ1NGO0FBN1JBO0VBQ0Usa0JBQUE7QUFnU0Y7QUE5UkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFpU0Y7QUE5UkE7RUFDRSw2Q0FBQTtBQWlTRjtBQTlSQTtFQUNFO0lBQ0UsZ0JBQUE7RUFpU0Y7QUFDRiIsImZpbGUiOiJjcmVkaXQtY2FyZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBzdHlsZXMgYW5kIHZhcmlhYmxlc1xyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgLy8gSWYgdGhlIGtleSBleGlzdHMgaW4gdGhlIG1hcFxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBQcmludHMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiB0aGUgdmFsdWVcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gJHBpbms6ICNGQTdDOTE7XHJcbi8vICRicm93bjogIzc1Nzc2MztcclxuLy8gJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4vLyAkYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICRncmV5LWRhcms6ICRicm93bjtcclxuLy8gJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4vLyAkd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuLy8gJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gIH1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7IFxyXG4gICAgICAubG5yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvZmluYW5jaWFsLXN0YXRlbWVudC5wbmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDoyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1pdGVtLmxhc3Qge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDIpIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMykgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMzAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IGxpIHtcclxuICAgIHdpZHRoOjI2NXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjowIDEwcHg7XHJcbiAgfSBcclxuICAuaXRlbS1saXN0IGxpIGEge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoyNjdweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywjNTM5MEQ5LCB3aGl0ZSwgd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjE2N2ZmLCAjODhhZGZmLCAjYWVmMGZmLCAjYWVmMGZmLCAjYmRlZmZhLCAjZTNmOGZkLCAjZWVmY2ZmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIHBhZGRpbmc6MzVweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4gIC5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiMyNDI0ODY7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICB9XHJcbiAgLmRvbWFpbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjMycHg7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgfVxyXG4gIC5idG4gaSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbiAgfVxyXG4gIC5hY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MEI5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG4gIH1cclxuICAuYWN0aW9uIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE5RDRERTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxucjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbS5sYXN0IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzExOTI5OTtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDMpIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwYTUxNTQ7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICB3aWR0aDogMjY1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxufVxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDEwODBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA0MDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLmNhcmRzIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2FyZHMgPiAqIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWJhc2lzOiBjYWxjKCg2MDBweCAtIDEwMCUpICogOTk5KTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbn1cblxuLmNhcmQsIC5jYXJkLWJvdHRvbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBib3gtc2hhZG93OiAzcHggMnB4IDE0cHggcmdiYSgzOCwgMzgsIDQ5LCAwLjQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY2FyZCAudGV4dCwgLmNhcmQtYm90dG9tIC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkLWJvdHRvbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWltYWdlLCAuY2FyZC1pbWFnZS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkLWltYWdlIGltZywgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLXRleHQge1xuICBjb2xvcjogIzAwMDc7XG4gIGZvbnQtc3R5bGU6IDEuMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXJlYWRtb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC40NWVtIDEuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMCwgMTM2LCAwLjc3NCksICM0YzAwZmYsICMwMDAwYzApO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMS4yZW0gIzAwMDQ7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDQuNWVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY3JlZGl0Q2FyZEJhbm5lci5qcGdcIik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI3F1b3RlIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59Il19 */"] });


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
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 50px;\n  margin: 0 auto;\n  justify-content: center;\n  align-items: center;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 1080px;\n  width: 100%;\n  height: 100%;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-size: 24px;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%], .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   .budget-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n@media only screen and (max-width: 800px) {\n  .budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .income-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #00cc86;\n}\n.budget-items-section[_ngcontent-%COMP%]   .budget-items-container[_ngcontent-%COMP%]   .expenses-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #dc3900;\n}\n.total-budget-section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n  max-width: 1080px;\n  border-top: 2px solid #161c29;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0 auto;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-weight: 300;\n  font-size: 58px;\n  color: #161c29;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff551a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJ1ZGdldC1pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsa0ZBQUE7QUFrQ1I7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQ0Y7QUR1REE7RUFDSSxXQUFBO0FDcERKO0FEdURBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3BERjtBRHVEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BERjtBRHFERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkRKO0FEekJJO0VBd0VGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsNEJBQUE7RUNqREo7QUFDRjtBRGtESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQW5GVTtFQW9GVixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDaEROO0FEaURNO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDL0NWO0FEZ0RVO0VBQ0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDOUNaO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDaEROO0FEa0RJO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDaEROO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoRE47QURtREU7RUFDRSxrQkFBQTtBQ2pESjtBRG1ERTtFQUNFLG1CQUFBO0FDakRKO0FEbURFO0VBQ0UsbUJBQUE7QUNqREo7QURxREE7RUFDRSxXQUFBO0FDbERGO0FEc0RFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDbkRKO0VEb0RJO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDbEROO0VEbURNO0lBQ0Usd0JBQUE7RUNqRFI7RURrRFE7SUFDRSxjQUFBO0VDaERWO0VEbURRO0lBQ0UscUJBQUE7RUNqRFY7QUFDRjtBRHNERTtFQUNFLG1CQUFBO0FDcERKO0FEc0RFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkRKO0FEcURFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2xESjtBRG9ERTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ2xETjtBRG9ERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2pESjtBRG1ERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDcERKO0FEeURFOztFQUdJLHFCQUFBO0VBQ0Esa0NBQUE7QUN2RE47QUQwREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkRKO0FEeURFO0VBQ0UsbUJBQUE7QUN0REo7QUR3REU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckRKO0FEdURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3BESjtBRHVERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNwREo7QURzREU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ25ESjtBRHFERTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNsRE47QURvREU7RUFDRSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNqRFI7QURtREU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNoREo7QURxREU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ2xESjs7RURxREU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2xESjtBQUNGO0FEc0RFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNwREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ3JESjtBRHdEQTtFQUNJLFdBQUE7QUNyREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDdERKO0FEeURBO0VBQ0ksaUJBQUE7QUN0REo7QUR5REE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDdERKO0FENERBO0VBQ0k7SUFDSSxVQUFBO0VDekROOztFRDRERTtJQUNJLGtCQUFBO0VDekROO0FBQ0Y7QUFuU0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFTQSx1QkFBQTtFQUNBLG1CQUFBO0FBNlJKO0FBclNJO0VBTEo7SUFNUSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQXdTTjtBQUNGO0FBbFNJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFvU1I7QUFsU1E7RUFOSjtJQU9RLGVBQUE7SUFDQSxzQkFBQTtFQXFTVjtBQUNGO0FBbFNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFvU1o7QUFsU1k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBb1NoQjtBQWpTWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBbVNoQjtBQS9SUTtFQUNJLGtCQUFBO0FBaVNaO0FBL1JZO0VBSEo7SUFJUSxlQUFBO0VBa1NkO0FBQ0Y7QUFoU1k7RUFDSSxjRDlCUjtBQ2dVUjtBQTdSWTtFQUNJLGNEakNWO0FDZ1VOO0FBelJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUEwUko7QUF4Ukk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEM0REO0FDcVZQO0FBeFJRO0VBQ0ksY0FBQTtBQTBSWjtBQXZSUTtFQUNJLGNBQUE7QUF5UloiLCJmaWxlIjoiYnVkZ2V0LWl0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vR2xvYmFsIHN0eWxlcyBhbmQgdmFyaWFibGVzXHJcbkBjaGFyc2V0IFwidXRmLThcIjtcclxuXHJcbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwJyk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICAnc21hbGwnOiAgNzY3cHgsXHJcbiAgJ21lZGl1bSc6IDgyMHB4LFxyXG4gICdsYXJnZSc6ICAxMjAwcHhcclxuKSAhZGVmYXVsdDtcclxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcclxuICAvLyBJZiB0aGUga2V5IGV4aXN0cyBpbiB0aGUgbWFwXHJcbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpIHtcclxuICAgIC8vIFByaW50cyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIHRoZSB2YWx1ZVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiRwcmltYXJ5LWNvbG9yOiAjMTlENERFO1xyXG5cclxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXHJcbiRwdXJwbGU6IHJnYigxNTksIDEwNCwgMjM1KTtcclxuJGxpZ2h0LWdyYXk6ICNmNWY1ZjU7XHJcbiRkYXJrOiByZ2IoMjIsIDI4LCA0MSk7XHJcblxyXG4kZ3JlZW46ICMwMGNjODY7XHJcbiRsaWdodC1ncmVlbjogI2JhZmFjZDtcclxuXHJcbiRyZWQ6ICNkYzM5MDA7XHJcbiRsaWdodC1yZWQ6ICNmZmU1ZTM7XHJcblxyXG4vLyAkcGluazogI0ZBN0M5MTtcclxuLy8gJGJyb3duOiAjNzU3NzYzO1xyXG4vLyAkYmVpZ2UtbGlnaHQ6ICNEMEQxQ0Q7XHJcbi8vICRiZWlnZS1saWdodGVyOiAjRUZGMEVCO1xyXG5cclxuLmJ1ZGdldC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuLy8gJGdyZXktZGFyazogJGJyb3duO1xyXG4vLyAkZ3JleS1saWdodDogJGJlaWdlLWxpZ2h0O1xyXG4kcHJpbWFyeTogJHB1cnBsZTtcclxuJGxpbms6ICRwdXJwbGU7XHJcbi8vICR3aWRlc2NyZWVuLWVuYWJsZWQ6IGZhbHNlO1xyXG4vLyAkZnVsbGhkLWVuYWJsZWQ6IGZhbHNlO1xyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcclxuJGlucHV0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuJGlucHV0LXNoYWRvdzogbm9uZTtcclxuXHJcbi5jYXJkLWljb24ge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgfVxyXG4gIFxyXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcclxufVxyXG5cclxuLmljb24tc2V0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM0OSk7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XHJcbiAgLmljb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi41ZW07XHJcbiAgICBAaW5jbHVkZSBicmVha3BvaW50IChtZWRpdW0pIHtcclxuICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogNzBweDsgXHJcbiAgICAgIC5sbnIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjZweDtcclxuICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZycpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXJcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaDEsIHAgIHtcclxuICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG4gICAgICBjb2xvcjogIzU0NTQ1NDtcclxuICAgICAgbWFyZ2luOjBweDtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgbWFyZ2luOiAxZW0gMCAuMjVlbTtcclxuICAgICAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzozcHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OjI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW0ubGFzdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMTUlKTtcclxuICB9XHJcbiAgLmljb24taXRlbTpudGgtb2YtdHlwZSgzKSAuaWNvbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAzMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNsZWFyZml4IHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLml0ZW0tbGlzdCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xyXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206ODBweDtcclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgze1xyXG4gICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6MjJweDtcclxuICAgIG1heC13aWR0aDo0NjBweDtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgfVxyXG4gIC5pdGVtLWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAvLyBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgfVxyXG4gIC5pdGVtLWxpc3QgbGkge1xyXG4gICAgd2lkdGg6MjY1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOjAgMTBweDtcclxuICB9IFxyXG4gIC5pdGVtLWxpc3QgbGkgYSB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjI2N3B4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1ZGVnLCM1MzkwRDksIHdoaXRlLCB3aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMyMTY3ZmYsICM4OGFkZmYsICNhZWYwZmYsICNhZWYwZmYsICNiZGVmZmEsICNlM2Y4ZmQsICNlZWZjZmYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgcGFkZGluZzozNXB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOjMwMG1zIGJhY2tncm91bmQ7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLml0ZW0tbGlzdCBsaS5hY3R2IGEsXHJcbiAgLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcclxuICAvLyAgIGJhY2tncm91bmQ6IzI0MjQ4NjtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOjIycHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gIH1cclxuICAuZG9tYWluLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206MzVweDtcclxuICB9XHJcbiAgLml0ZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6MzJweDtcclxuICB9XHJcbiAgLml0ZW0gc3BhbiB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICBcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIG1hcmdpbi10b3A6YXV0bztcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICB9XHJcbiAgLmJ0biBpIHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBtYXJnaW4tbGVmdDtcclxuICB9XHJcbiAgLmFjdGlvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDY0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmFjdGlvbiBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDQ1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwQjk7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYTpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4MDgwQjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICBcclxuICB9XHJcbiAgXHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgIG1pbi13aWR0aDogNDYwcHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYnVkZ2V0LWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5iYW5uZXItdGV4dCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwODBweDtcclxufVxyXG5cclxuI3F1b3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCl7XHJcbiAgICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHggMTVweDtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMFwiKTtcbi5idWRnZXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jYXJkLWljb24ge1xuICB3aWR0aDogNzVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xufVxuXG4uaWNvbi1zZXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM0OSk7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNzVweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWJvdHRvbTogMi41ZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIC5pY29uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTlENERFO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcwcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxuciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjZweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIC5pY29uLWNvbnRhaW5lciAubG5yOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vYXNzZXRzL2ZpbmFuY2lhbC1zdGF0ZW1lbnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEsIC5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIGNvbG9yOiAjNTQ1NDU0O1xuICBtYXJnaW46IDBweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxIHtcbiAgbWFyZ2luOiAxZW0gMCAwLjI1ZW07XG4gIGNvbG9yOiAjM2QzZDNkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtLmxhc3Qge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbTpudGgtb2YtdHlwZSgyKSAuaWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMTE5Mjk5O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMykgLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzBhNTE1NDtcbn1cblxuLmNsZWFyZml4IHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaSB7XG4gICAgcGFkZGluZzogMTAwcHggMCAyMDBweCAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG59XG4uY29tcG9uZW50LW1lbnUgaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIGgzIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1heC13aWR0aDogNDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCBsaSB7XG4gIHdpZHRoOiAyNjVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5pdGVtLWxpc3QgbGkgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2N3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBiYWNrZ3JvdW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40MzIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5pdGVtLWxpc3QgbGkuYWN0diBhLFxuLml0ZW0tbGlzdCBsaSBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5kb21haW4tdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xufVxuXG4uaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnRuIGkge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zaXRpb246IDMwMG1zIG1hcmdpbi1sZWZ0O1xufVxuXG4uYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9uIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDE4cHggNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzgwODBCOTtcbiAgYm9yZGVyOiAycHggc29saWQgIzFGMUYzNTtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xufVxuXG4uYWN0aW9uIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICM4MDgwQjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cblxuICAuYnVkZ2V0LWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICBjb2xvcjogI2VlZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi5iYW5uZXItdGV4dCB7XG4gIG1heC13aWR0aDogMTA4MHB4O1xufVxuXG4jcXVvdGUge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyLWNvbnRhaW5lci5jb250YWluZXItZmx1aWQgLnJvdy1mbHVpZCAucGFnZS1jZW50ZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICAgIHBhZGRpbmc6IDUwcHggMTVweDtcbiAgfVxufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbn1cbi5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmluY29tZS1jb2x1bW4sIC5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciAuZXhwZW5zZXMtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogMDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uIGgxLCAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmV4cGVuc2VzLWNvbHVtbiBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uIC5idWRnZXQtaXRlbXMsIC5idWRnZXQtaXRlbXMtc2VjdGlvbiAuYnVkZ2V0LWl0ZW1zLWNvbnRhaW5lciAuZXhwZW5zZXMtY29sdW1uIC5idWRnZXQtaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmluY29tZS1jb2x1bW4ge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuLmJ1ZGdldC1pdGVtcy1zZWN0aW9uIC5idWRnZXQtaXRlbXMtY29udGFpbmVyIC5pbmNvbWUtY29sdW1uIGgxIHtcbiAgY29sb3I6ICMwMGNjODY7XG59XG4uYnVkZ2V0LWl0ZW1zLXNlY3Rpb24gLmJ1ZGdldC1pdGVtcy1jb250YWluZXIgLmV4cGVuc2VzLWNvbHVtbiBoMSB7XG4gIGNvbG9yOiAjZGMzOTAwO1xufVxuXG4udG90YWwtYnVkZ2V0LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxNjFjMjk7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDU4cHg7XG4gIGNvbG9yOiAjMTYxYzI5O1xufVxuLnRvdGFsLWJ1ZGdldC1zZWN0aW9uIGgyLmdyZWVuIHtcbiAgY29sb3I6ICMwYWZmYWI7XG59XG4udG90YWwtYnVkZ2V0LXNlY3Rpb24gaDIucmVkIHtcbiAgY29sb3I6ICNmZjU1MWE7XG59Il19 */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Networth");
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
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  border-radius: 3px;\n}\n\n@media (max-width: 959px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    border-radius: 0px;\n  }\n}\n\n.main-nav-bar[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1080px;\n  background-color: transparent;\n}\n\n.mobile-nav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.mobile-nav[_ngcontent-%COMP%]   .mobile-menu[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n#nav[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0, #4f017c, #8503a5, #9e019e);\n}\n\n.white-icon[_ngcontent-%COMP%] {\n  color: white;\n  filter: drop-shadow(2px 2px 2px black);\n}\n\n#logo[_ngcontent-%COMP%] {\n  width: 90px;\n  filter: drop-shadow(4px 4px 4px #222);\n}\n\n@media (max-width: 959px) {\n  #logo[_ngcontent-%COMP%] {\n    width: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQURKOztBQUdJO0VBQ0ksZ0JBQUE7QUFEUjs7QUFLQTtFQUNJLHVHQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxxQ0FBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxXQUFBO0VBRk47QUFDRiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbi1pdGVtc3tcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1hdC10b29sYmFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCl7XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLW5hdi1iYXIgeyBcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5tb2JpbGUtbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAubW9iaWxlLW1lbnUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNuYXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDAsIDEzNiwgMC43NzQpLCByZ2IoNzYsIDAsIDI1NSksIHJnYigwLCAwLCAxOTIpLCByZ2IoNzksIDEsIDEyNCksIHJnYigxMzMsIDMsIDE2NSksIHJnYigxNTgsIDEsIDE1OCkpXHJcbn1cclxuXHJcbi53aGl0ZS1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCAycHggYmxhY2spO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDRweCA0cHggIzIyMik7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgICNsb2dvIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgIH1cclxufSJdfQ== */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  flex-direction: row;\n  margin-top: 10px;\n  margin-bottom: 30px;\n}\n.cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-basis: calc((600px - 100%) * 999);\n}\n.cards[_ngcontent-%COMP%]    > .card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n.card[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background: white;\n  color: #000;\n  border-radius: 0.45em;\n  box-shadow: 3px 2px 14px rgba(38, 38, 49, 0.4);\n  font-size: 1rem;\n}\n.card[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .card-bottom[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media only screen and (max-width: 800px) {\n  .cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .cards[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    min-width: 280px;\n    max-width: 330px;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n.card-bottom[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  background-size: cover;\n  justify-content: center;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 40px;\n  width: 100px;\n}\n@media only screen and (max-width: 800px) {\n  .card-image-bottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n  text-align: center;\n}\n.card-text[_ngcontent-%COMP%] {\n  color: #0007;\n  font-style: 1.1rem;\n  width: 100%;\n}\n.card-readmore[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0.5em;\n  display: inline-flex;\n  text-decoration: none;\n  padding: 0.45em 1.05em;\n  border-radius: 0.45em;\n  background: linear-gradient(75deg, rgba(0, 0, 136, 0.774), #4c00ff, #0000c0);\n  color: #fff;\n  font-size: 1.1rem;\n  box-shadow: 0 0.5em 1.2em #0004;\n}\n#savings[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#quote[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-size: 4.5em;\n  font-weight: lighter;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('bankAccountBanner.jpg');\n}\n@media only screen and (max-width: 800px) {\n  #quote[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJhbmstYWNjb3VudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVEsa0ZBQUE7QUFrQ1I7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNwQ0Y7QUR1REE7RUFDSSxXQUFBO0FDcERKO0FEdURBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3BERjtBRHVEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ3BERjtBRHFERTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDbkRKO0FEekJJO0VBd0VGO0lBTUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsNEJBQUE7RUNqREo7QUFDRjtBRGtESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQW5GVTtFQW9GVixXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDaEROO0FEaURNO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDL0NWO0FEZ0RVO0VBQ0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDOUNaO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDaEROO0FEa0RJO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDaEROO0FEa0RJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNoRE47QURtREU7RUFDRSxrQkFBQTtBQ2pESjtBRG1ERTtFQUNFLG1CQUFBO0FDakRKO0FEbURFO0VBQ0UsbUJBQUE7QUNqREo7QURxREE7RUFDRSxXQUFBO0FDbERGO0FEc0RFO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDbkRKO0VEb0RJO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDbEROO0VEbURNO0lBQ0Usd0JBQUE7RUNqRFI7RURrRFE7SUFDRSxjQUFBO0VDaERWO0VEbURRO0lBQ0UscUJBQUE7RUNqRFY7QUFDRjtBRHNERTtFQUNFLG1CQUFBO0FDcERKO0FEc0RFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkRKO0FEcURFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2xESjtBRG9ERTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtBQ2xETjtBRG9ERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2pESjtBRG1ERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsNkJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsK0NBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0FDcERKO0FEeURFOztFQUdJLHFCQUFBO0VBQ0Esa0NBQUE7QUN2RE47QUQwREU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkRKO0FEeURFO0VBQ0UsbUJBQUE7QUN0REo7QUR3REU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckRKO0FEdURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ3BESjtBRHVERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNwREo7QURzREU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQ25ESjtBRHFERTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNsRE47QURvREU7RUFDRSxxQkFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNqRFI7QURtREU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNoREo7QURxREU7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtFQ2xESjs7RURxREU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQ2xESjtBQUNGO0FEc0RFO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNwREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ3JESjtBRHdEQTtFQUNJLFdBQUE7QUNyREo7QUR3REE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FDdERKO0FEeURBO0VBQ0ksaUJBQUE7QUN0REo7QUR5REE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDdERKO0FENERBO0VBQ0k7SUFDSSxVQUFBO0VDekROOztFRDRERTtJQUNJLGtCQUFBO0VDekROO0FBQ0Y7QUFsU0E7RUFFRSxhQUFBO0VBRUEsU0FBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtBQWlTRjtBQTlSQTtFQUNFLFlBQUE7RUFDQSxzQ0FBQTtBQWlTRjtBQXhSQTtFQUNFLGdCQUFBO0FBMlJGO0FBeFJBO0VBRUUsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQTBSRjtBQXpSRTtFQUNFLFdBQUE7QUEyUko7QUF2UkE7RUFDSTtJQUNJLGVBQUE7RUEwUk47O0VBdlJFO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQTBSTjtBQUNGO0FBdlJBO0VBQ0UsY0FBQTtBQXlSRjtBQXRSQTtFQUNFLGdCQUFBO0FBeVJGO0FBdFJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7QUF3UkY7QUF0UkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUF3Uko7QUFuUkU7RUFDRTtJQUNFLGlCQUFBO0VBc1JKO0FBQ0Y7QUFsUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFxUkY7QUFsUkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXFSRjtBQW5SQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUdBLFdBQUE7QUFvUkY7QUFqUkE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0RUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBb1JGO0FBalJBO0VBQ0UsZ0JBQUE7QUFvUkY7QUFqUkE7RUFDRSxrQkFBQTtBQW9SRjtBQWxSQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXFSRjtBQWxSQTtFQUNFLDhDQUFBO0FBcVJGO0FBbFJBO0VBQ0U7SUFDRSxnQkFBQTtFQXFSRjtBQUNGIiwiZmlsZSI6ImJhbmstYWNjb3VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0dsb2JhbCBzdHlsZXMgYW5kIHZhcmlhYmxlc1xyXG5AY2hhcnNldCBcInV0Zi04XCI7XHJcblxyXG4vLyBJbXBvcnQgYSBHb29nbGUgRm9udFxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwfExhdG86MzAwLDkwMCcpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ3NtYWxsJzogIDc2N3B4LFxyXG4gICdtZWRpdW0nOiA4MjBweCxcclxuICAnbGFyZ2UnOiAgMTIwMHB4XHJcbikgIWRlZmF1bHQ7XHJcbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XHJcbiAgLy8gSWYgdGhlIGtleSBleGlzdHMgaW4gdGhlIG1hcFxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcbiAgICAvLyBQcmludHMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiB0aGUgdmFsdWVcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGJyZWFrcG9pbnQpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4kcHJpbWFyeS1jb2xvcjogIzE5RDRERTtcclxuXHJcbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xyXG4kcHVycGxlOiByZ2IoMTU5LCAxMDQsIDIzNSk7XHJcbiRsaWdodC1ncmF5OiAjZjVmNWY1O1xyXG4kZGFyazogcmdiKDIyLCAyOCwgNDEpO1xyXG5cclxuJGdyZWVuOiAjMDBjYzg2O1xyXG4kbGlnaHQtZ3JlZW46ICNiYWZhY2Q7XHJcblxyXG4kcmVkOiAjZGMzOTAwO1xyXG4kbGlnaHQtcmVkOiAjZmZlNWUzO1xyXG5cclxuLy8gJHBpbms6ICNGQTdDOTE7XHJcbi8vICRicm93bjogIzc1Nzc2MztcclxuLy8gJGJlaWdlLWxpZ2h0OiAjRDBEMUNEO1xyXG4vLyAkYmVpZ2UtbGlnaHRlcjogI0VGRjBFQjtcclxuXHJcbi5idWRnZXQtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbi8vICRncmV5LWRhcms6ICRicm93bjtcclxuLy8gJGdyZXktbGlnaHQ6ICRiZWlnZS1saWdodDtcclxuJHByaW1hcnk6ICRwdXJwbGU7XHJcbiRsaW5rOiAkcHVycGxlO1xyXG4vLyAkd2lkZXNjcmVlbi1lbmFibGVkOiBmYWxzZTtcclxuLy8gJGZ1bGxoZC1lbmFibGVkOiBmYWxzZTtcclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kaW5wdXQtYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XHJcblxyXG4uY2FyZC1pY29uIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gIH1cclxuICBcclxuLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XHJcbn1cclxuXHJcbi5pY29uLXNldCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xyXG4gIC5pY29uLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xyXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCAobWVkaXVtKSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDcwcHg7IFxyXG4gICAgICAubG5yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvZmluYW5jaWFsLXN0YXRlbWVudC5wbmcnKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGgxLCBwICB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNTBweDtcclxuICAgICAgY29sb3I6ICM1NDU0NTQ7XHJcbiAgICAgIG1hcmdpbjowcHg7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgIG1hcmdpbjogMWVtIDAgLjI1ZW07XHJcbiAgICAgIGNvbG9yOiAjM2QzZDNkO1xyXG4gICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6M3B4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDoyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1pdGVtLmxhc3Qge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDIpIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDE1JSk7XHJcbiAgfVxyXG4gIC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMykgLmljb24tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeS1jb2xvciwgMzAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNvbXBvbmVudC1tZW51LWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5pdGVtLWxpc3Qge1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoM3tcclxuICAgIGZvbnQtc2l6ZToyNnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OjIycHg7XHJcbiAgICBtYXgtd2lkdGg6NDYwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IHtcclxuICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLy8gcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gIH1cclxuICAuaXRlbS1saXN0IGxpIHtcclxuICAgIHdpZHRoOjI2NXB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjowIDEwcHg7XHJcbiAgfSBcclxuICAuaXRlbS1saXN0IGxpIGEge1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoyNjdweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywjNTM5MEQ5LCB3aGl0ZSwgd2hpdGUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMjE2N2ZmLCAjODhhZGZmLCAjYWVmMGZmLCAjYWVmMGZmLCAjYmRlZmZhLCAjZTNmOGZkLCAjZWVmY2ZmKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgIHBhZGRpbmc6MzVweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcyBiYWNrZ3JvdW5kO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5pdGVtLWxpc3QgbGkuYWN0diBhLFxyXG4gIC5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XHJcbiAgLy8gICBiYWNrZ3JvdW5kOiMyNDI0ODY7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICB9XHJcbiAgLmRvbWFpbi10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjM1cHg7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OjMycHg7XHJcbiAgfVxyXG4gIC5pdGVtIHNwYW4ge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgfVxyXG4gIC5idG4gaSB7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgbWFyZ2luLWxlZnQ7XHJcbiAgfVxyXG4gIC5hY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hY3Rpb24gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMThweCA0NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODA4MEI5O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG4gIH1cclxuICAuYWN0aW9uIGE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDQ2MHB4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ1ZGdldC1jb250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcblxyXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVyLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbn1cclxuXHJcbiNxdW90ZSB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDBcIik7XG4uYnVkZ2V0LWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uY2FyZC1pY29uIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNDA0KTtcbn1cblxuLmljb24tc2V0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zNDkpO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDc1cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XG4gIC5pY29uLXNldCAuaWNvbi1pdGVtIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICB9XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzE5RDRERTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSAuaWNvbi1jb250YWluZXIgLmxucjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuL2Fzc2V0cy9maW5hbmNpYWwtc3RhdGVtZW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIGgxLCAuaWNvbi1zZXQgLmljb24taXRlbSBwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogIzU0NTQ1NDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSB7XG4gIG1hcmdpbjogMWVtIDAgMC4yNWVtO1xuICBjb2xvcjogIzNkM2QzZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbS5sYXN0IHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW06bnRoLW9mLXR5cGUoMikgLmljb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzExOTI5OTtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDMpIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMwYTUxNTQ7XG59XG5cbi5jbGVhcmZpeCB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jb21wb25lbnQtbWVudS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3Qge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb21wb25lbnQtbWVudS1saXN0IC5pdGVtLWxpc3QgbGkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMjAwcHggMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgfVxufVxuLmNvbXBvbmVudC1tZW51IGhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5jb21wb25lbnQtbWVudS1saXN0IGhlYWRlciBoMyB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXgtd2lkdGg6IDQ2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3QgbGkge1xuICB3aWR0aDogMjY1cHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXRlbS1saXN0IGxpIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgYmFja2dyb3VuZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNDMyKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaXRlbS1saXN0IGxpLmFjdHYgYSxcbi5pdGVtLWxpc3QgbGkgYTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZG9tYWluLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLml0ZW0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ0biBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBtYXJnaW4tbGVmdDtcbn1cblxuLmFjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjdGlvbiBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxOHB4IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MDgwQjk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjFGMzU7XG4gIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcbn1cblxuLmFjdGlvbiBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjODA4MEI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2FyZCB7XG4gICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmJ1ZGdldC1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgfVxufVxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbiAgY29sb3I6ICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uYmFubmVyLXRleHQge1xuICBtYXgtd2lkdGg6IDEwODBweDtcbn1cblxuI3F1b3RlIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlYWRlci1jb250YWluZXIuY29udGFpbmVyLWZsdWlkIC5yb3ctZmx1aWQgLnBhZ2UtY2VudGVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgICBwYWRkaW5nOiA1MHB4IDE1cHg7XG4gIH1cbn1cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcmRzID4gKiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1iYXNpczogY2FsYygoNjAwcHggLSAxMDAlKSAqIDk5OSk7XG59XG5cbi5jYXJkcyA+IC5jYXJkIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmNhcmQsIC5jYXJkLWJvdHRvbSB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBib3gtc2hhZG93OiAzcHggMnB4IDE0cHggcmdiYSgzOCwgMzgsIDQ5LCAwLjQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uY2FyZCAudGV4dCwgLmNhcmQtYm90dG9tIC50ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmRzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuY2FyZHMgPiAqIHtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIG1heC13aWR0aDogMzMwcHg7XG4gIH1cbn1cbi5jYXJkIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkLWJvdHRvbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWltYWdlLCAuY2FyZC1pbWFnZS1ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkLWltYWdlIGltZywgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQtaW1hZ2UtYm90dG9tIGltZyB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gIH1cbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLXRleHQge1xuICBjb2xvcjogIzAwMDc7XG4gIGZvbnQtc3R5bGU6IDEuMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLXJlYWRtb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMC40NWVtIDEuMDVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40NWVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMCwgMTM2LCAwLjc3NCksICM0YzAwZmYsICMwMDAwYzApO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJveC1zaGFkb3c6IDAgMC41ZW0gMS4yZW0gIzAwMDQ7XG59XG5cbiNzYXZpbmdzIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcXVvdGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uY3VzdG9tLWJhbm5lci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYW5rQWNjb3VudEJhbm5lci5qcGdcIik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgI3F1b3RlIHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59Il19 */"] });


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
BudgetCalculatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetCalculatorComponent, selectors: [["app-budget-calculator"]], decls: 43, vars: 1, consts: [[1, "custom-banner-image"], [1, "banner-overlay"], [1, "banner-text"], [1, "page-center"], ["id", "quote"], ["id", "author"], [1, "budget-content"], ["id", "budget-first-p"], [1, "top-bar", "budget-content"], [3, "isBudget"], [1, "component-menu-list"], [1, "item-list"], ["href", "https://mint.intuit.com/"], [1, "title"], ["src", "../../assets/mint.png", "alt", "money icon", 1, "card-icon"], ["href", "https://www.youneedabudget.com/"], ["src", "../../assets/ynab.png", "alt", "money icon", 1, "card-icon"], ["href", "https://www.personalcapital.com/"], ["src", "../../assets/Personal-Capital-Logo.png", "alt", "money icon", 1, "card-icon"], ["href", "#"], ["src", "../../assets/Excel.png", "alt", "money icon", 1, "card-icon"]], template: function BudgetCalculatorComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam odio. Nulla nec convallis purus. Quisque libero odio, condimentum eu arcu non, molestie fermentum augue. Praesent sit amet sollicitudin urna, quis accumsan enim. Aliquam consectetur purus at arcu rutrum, et ornare dui hendrerit. Phasellus ac lectus at nunc cursus faucibus. Integer hendrerit fermentum lacus, sit amet congue mauris porttitor nec. Vestibulum pharetra dictum metus, nec auctor nulla fringilla at. Etiam gravida suscipit quam, in commodo est fringilla eu. Sed porttitor hendrerit mi, pellentesque blandit orci. Ut vel massa et dui rutrum elementum ut pulvinar lacus. Vivamus massa dui, hendrerit nec nibh eget, tempus mollis ante.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "How To Get Started?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac aliquam odio. Nulla nec convallis purus. Quisque libero odio, condimentum eu arcu non, molestie fermentum augue. Praesent sit amet sollicitudin urna, quis accumsan enim. Aliquam consectetur purus at arcu rutrum, et ornare dui hendrerit. Phasellus ac lectus at nunc cursus faucibus. Integer hendrerit fermentum lacus, sit amet congue mauris porttitor nec. Vestibulum pharetra dictum metus, nec auctor nulla fringilla at.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Budget Calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-budget-item-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Here Are a Few More In-Depth Options:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isBudget", ctx.isBudget);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700|Lato:300,900\");\n.budget-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-top: 25px;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 75px;\n}\n.component-menu-list[_ngcontent-%COMP%] {\n  text-align: center;\n  justify-content: center;\n  align-content: center;\n  padding-bottom: 200px;\n  width: 100%;\n  max-width: 1080px;\n  margin: 0 auto;\n  margin-bottom: 25px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.404);\n}\n.icon-set[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 1080px;\n  width: 100%;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.349);\n  padding-top: 50px;\n  padding-bottom: 75px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  float: left;\n  margin-bottom: 2.5em;\n}\n@media (min-width: 820px) {\n  .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%] {\n    width: 33%;\n    margin-bottom: 0px;\n    border-right: 1px solid #ccc;\n  }\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  width: 120px;\n  height: 120px;\n  border-radius: 100%;\n  background: #19D4DE;\n  color: #fff;\n  text-align: center;\n  font-size: 70px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%] {\n  display: block;\n  padding-top: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   .lnr[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('financial-statement.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  color: #545454;\n  margin: 0px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 1em 0 0.25em;\n  color: #3d3d3d;\n  font-size: 24px;\n  letter-spacing: 3px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 26px;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item.last[_ngcontent-%COMP%] {\n  border-right: none;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(2)   .icon-container[_ngcontent-%COMP%] {\n  background: #119299;\n}\n.icon-set[_ngcontent-%COMP%]   .icon-item[_ngcontent-%COMP%]:nth-of-type(3)   .icon-container[_ngcontent-%COMP%] {\n  background: #0a5154;\n}\n.clearfix[_ngcontent-%COMP%] {\n  clear: both;\n}\n@media only screen and (max-width: 800px) {\n  .component-menu-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 100px 0 200px 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    padding-top: 0;\n  }\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 100px;\n  }\n}\n.component-menu[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #fff;\n  font-weight: bold;\n  margin-bottom: 15px;\n}\n.component-menu-list[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n  line-height: 22px;\n  max-width: 460px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1080px;\n  margin: 0 auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 265px;\n  height: 100px;\n  margin: 0 10px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 267px;\n  background-color: transparent;\n  border-radius: 20px;\n  padding: 35px;\n  color: white;\n  text-align: left;\n  transition: 300ms background;\n  position: relative;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.432);\n  transition: transform 0.2s ease-in;\n  text-decoration: none;\n}\n.item-list[_ngcontent-%COMP%]   li.actv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: transform 0.2s ease-in;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.domain-title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 26px;\n  text-align: center;\n  line-height: 32px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-weight: normal;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-top: auto;\n  display: flex;\n}\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-left: 10px;\n  transition: 300ms margin-left;\n}\n.action[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  text-align: center;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 18px 45px;\n  border-radius: 10px;\n  font-size: 16px;\n  color: #8080B9;\n  border: 2px solid #1F1F35;\n  transition: 300ms all;\n}\n.action[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #8080B9;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: relative;\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  color: #eee;\n  text-align: left;\n  position: relative;\n  margin: 0 auto;\n  z-index: 1;\n  font-family: sans-serif;\n}\n.banner-text[_ngcontent-%COMP%] {\n  max-width: 1080px;\n}\n#quote[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-style: italic;\n}\n@media (max-width: 767px) {\n  .header-container.container-fluid[_ngcontent-%COMP%]   .row-fluid[_ngcontent-%COMP%]   .page-center[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .custom-banner-image[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n    padding: 50px 15px;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1080px;\n  height: 68px;\n  margin: 0 auto;\n  margin-top: 25px;\n  display: flex;\n  align-items: center;\n}\n.top-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75em;\n  font-family: \"Lato\";\n  font-weight: 900;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #161c29;\n}\n.total-budget-section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n  max-width: 1080px;\n  border-top: 2px solid #161c29;\n  justify-content: flex-end;\n  align-items: center;\n  margin: 0 auto;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Lato\";\n  font-weight: 300;\n  font-size: 58px;\n  color: #161c29;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.green[_ngcontent-%COMP%] {\n  color: #0affab;\n}\n.total-budget-section[_ngcontent-%COMP%]   h2.red[_ngcontent-%COMP%] {\n  color: #ff551a;\n}\n.add-item-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-item-section[_ngcontent-%COMP%]   .add-item-container[_ngcontent-%COMP%] {\n  width: 1080px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(1) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(2) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(3) {\n  width: 300px;\n}\n.card-icon[_ngcontent-%COMP%]:nth-child(4) {\n  width: 300px;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 148, 99, 0.774), rgba(0, 128, 145, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 128, 145, 0.774), rgba(0, 116, 116, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 116, 116, 0.774), rgba(0, 104, 165, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, rgba(0, 104, 165, 0.774), rgba(0, 131, 136, 0.774));\n}\n.item-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\n  background: linear-gradient(75deg, #8503a5, #9e019e);\n}\n@media only screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    max-height: 250px;\n    min-width: 460px;\n    flex-direction: row;\n  }\n\n  .budget-content[_ngcontent-%COMP%] {\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n\n  #budget-first-p[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n}\n.component-menu-list[_ngcontent-%COMP%]   .item-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.custom-banner-image[_ngcontent-%COMP%] {\n  background-image: url('budget-banner.jpg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXGJ1ZGdldC1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRLGtGQUFBO0FBa0NSO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcENGO0FEdURBO0VBQ0ksV0FBQTtBQ3BESjtBRHVEQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUNwREY7QUR1REE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNwREY7QURxREU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ25ESjtBRHpCSTtFQXdFRjtJQU1JLFVBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0VDakRKO0FBQ0Y7QURrREk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFuRlU7RUFvRlYsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2hETjtBRGlETTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQy9DVjtBRGdEVTtFQUNFLGdEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzlDWjtBRGtESTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2hETjtBRGtESTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2hETjtBRGtESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDaEROO0FEbURFO0VBQ0Usa0JBQUE7QUNqREo7QURtREU7RUFDRSxtQkFBQTtBQ2pESjtBRG1ERTtFQUNFLG1CQUFBO0FDakRKO0FEcURBO0VBQ0UsV0FBQTtBQ2xERjtBRHNERTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtFQ25ESjtFRG9ESTtJQUNFLGVBQUE7SUFDQSxzQkFBQTtFQ2xETjtFRG1ETTtJQUNFLHdCQUFBO0VDakRSO0VEa0RRO0lBQ0UsY0FBQTtFQ2hEVjtFRG1EUTtJQUNFLHFCQUFBO0VDakRWO0FBQ0Y7QURzREU7RUFDRSxtQkFBQTtBQ3BESjtBRHNERTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ25ESjtBRHFERTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNsREo7QURvREU7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7QUNsRE47QURvREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNqREo7QURtREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLDZCQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUVBLCtDQUFBO0VBQ0Esa0NBQUE7RUFFQSxxQkFBQTtBQ3BESjtBRHlERTs7RUFHSSxxQkFBQTtFQUNBLGtDQUFBO0FDdkROO0FEMERFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3ZESjtBRHlERTtFQUNFLG1CQUFBO0FDdERKO0FEd0RFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3JESjtBRHVERTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNwREo7QUR1REU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDcERKO0FEc0RFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNuREo7QURxREU7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbEROO0FEb0RFO0VBQ0UscUJBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDakRSO0FEbURFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDaERKO0FEcURFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUNsREo7O0VEcURFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNsREo7QUFDRjtBRHNERTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDcERKO0FEd0RBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNyREo7QUR3REE7RUFDSSxXQUFBO0FDckRKO0FEd0RBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQ3RESjtBRHlEQTtFQUNJLGlCQUFBO0FDdERKO0FEeURBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ3RESjtBRDREQTtFQUNJO0lBQ0ksVUFBQTtFQ3pETjs7RUQ0REU7SUFDSSxrQkFBQTtFQ3pETjtBQUNGO0FBbFNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFLQSxtQkFBQTtBQWdTSjtBQTlSSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjREdEO0FDNlJQO0FBNVJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBR0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUE2Uko7QUEzUkk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNEaEJEO0FDNlNQO0FBM1JRO0VBQ0ksY0FBQTtBQTZSWjtBQTFSUTtFQUNJLGNBQUE7QUE0Ulo7QUF2UkE7RUFDSSxhQUFBO0VBR0EsdUJBQUE7RUFDQSxtQkFBQTtBQXdSSjtBQXRSSTtFQUNJLGFBQUE7QUF3UlI7QUFwUkE7RUFDSSxZQUFBO0FBdVJKO0FBcFJBO0VBQ0ksWUFBQTtBQXVSSjtBQXBSQTtFQUNJLFlBQUE7QUF1Uko7QUFwUkE7RUFDSSxZQUFBO0FBdVJKO0FBcFJBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUF1Uko7QUFuUkk7RUFDRSxxRkFBQTtBQXNSTjtBQWpSSTtFQUNFLHNGQUFBO0FBb1JOO0FBL1FJO0VBQ0Usc0ZBQUE7QUFrUk47QUE3UUk7RUFDRSxzRkFBQTtBQWdSTjtBQTNRSTtFQUNFLG9EQUFBO0FBOFFOO0FBMVFFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUE2UUo7O0VBMVFFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUE2UUo7O0VBelFJO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBRUEsVUFBQTtFQTJRTjs7RUF2UUU7SUFDRSxpQkFBQTtFQTBRSjtBQUNGO0FBclFJO0VBQ0UsVUFBQTtBQXVRTjtBQW5RRTtFQUNFLDBDQUFBO0FBc1FKIiwiZmlsZSI6ImJ1ZGdldC1jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9HbG9iYWwgc3R5bGVzIGFuZCB2YXJpYWJsZXNcclxuQGNoYXJzZXQgXCJ1dGYtOFwiO1xyXG5cclxuLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMHxMYXRvOjMwMCw5MDAnKTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gICdzbWFsbCc6ICA3NjdweCxcclxuICAnbWVkaXVtJzogODIwcHgsXHJcbiAgJ2xhcmdlJzogIDEyMDBweFxyXG4pICFkZWZhdWx0O1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xyXG4gIC8vIElmIHRoZSBrZXkgZXhpc3RzIGluIHRoZSBtYXBcclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCkge1xyXG4gICAgLy8gUHJpbnRzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gdGhlIHZhbHVlXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuJHByaW1hcnktY29sb3I6ICMxOUQ0REU7XHJcblxyXG4vLyBTZXQgeW91ciBicmFuZCBjb2xvcnNcclxuJHB1cnBsZTogcmdiKDE1OSwgMTA0LCAyMzUpO1xyXG4kbGlnaHQtZ3JheTogI2Y1ZjVmNTtcclxuJGRhcms6IHJnYigyMiwgMjgsIDQxKTtcclxuXHJcbiRncmVlbjogIzAwY2M4NjtcclxuJGxpZ2h0LWdyZWVuOiAjYmFmYWNkO1xyXG5cclxuJHJlZDogI2RjMzkwMDtcclxuJGxpZ2h0LXJlZDogI2ZmZTVlMztcclxuXHJcbi8vICRwaW5rOiAjRkE3QzkxO1xyXG4vLyAkYnJvd246ICM3NTc3NjM7XHJcbi8vICRiZWlnZS1saWdodDogI0QwRDFDRDtcclxuLy8gJGJlaWdlLWxpZ2h0ZXI6ICNFRkYwRUI7XHJcblxyXG4uYnVkZ2V0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcclxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xyXG4vLyAkZ3JleS1kYXJrOiAkYnJvd247XHJcbi8vICRncmV5LWxpZ2h0OiAkYmVpZ2UtbGlnaHQ7XHJcbiRwcmltYXJ5OiAkcHVycGxlO1xyXG4kbGluazogJHB1cnBsZTtcclxuLy8gJHdpZGVzY3JlZW4tZW5hYmxlZDogZmFsc2U7XHJcbi8vICRmdWxsaGQtZW5hYmxlZDogZmFsc2U7XHJcblxyXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiRjb250cm9sLWJvcmRlci13aWR0aDogMnB4O1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmF5O1xyXG4kaW5wdXQtc2hhZG93OiBub25lO1xyXG5cclxuLmNhcmQtaWNvbiB7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICB9XHJcbiAgXHJcbi5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC40MDQpO1xyXG59XHJcblxyXG4uaWNvbi1zZXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1heC13aWR0aDogMTA4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNzVweDtcclxuICAuaWNvbi1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQgKG1lZGl1bSkge1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiA3MHB4OyBcclxuICAgICAgLmxuciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyNnB4O1xyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ZpbmFuY2lhbC1zdGF0ZW1lbnQucG5nJyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlclxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMSwgcCAge1xyXG4gICAgICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgICBtYXJnaW46MHB4O1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICBtYXJnaW46IDFlbSAwIC4yNWVtO1xyXG4gICAgICBjb2xvcjogIzNkM2QzZDtcclxuICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOjNweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6MjZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmljb24taXRlbS5sYXN0IHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbiAgLmljb24taXRlbTpudGgtb2YtdHlwZSgyKSAuaWNvbi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5LWNvbG9yLCAxNSUpO1xyXG4gIH1cclxuICAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDMpIC5pY29uLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnktY29sb3IsIDMwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5jb21wb25lbnQtbWVudS1saXN0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAuaXRlbS1saXN0IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb21wb25lbnQtbWVudSBoZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4MHB4O1xyXG4gIH1cclxuICAuY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDN7XHJcbiAgICBmb250LXNpemU6MjZweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gIH1cclxuICAuY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBsaW5lLWhlaWdodDoyMnB4O1xyXG4gICAgbWF4LXdpZHRoOjQ2MHB4O1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICB9XHJcbiAgLml0ZW0tbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC8vIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDEwODBweDtcclxuICAgICAgbWFyZ2luOjAgYXV0bztcclxuICB9XHJcbiAgLml0ZW0tbGlzdCBsaSB7XHJcbiAgICB3aWR0aDoyNjVweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW46MCAxMHB4O1xyXG4gIH0gXHJcbiAgLml0ZW0tbGlzdCBsaSBhIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MjY3cHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTVkZWcsIzUzOTBEOSwgd2hpdGUsIHdoaXRlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzIxNjdmZiwgIzg4YWRmZiwgI2FlZjBmZiwgI2FlZjBmZiwgI2JkZWZmYSwgI2UzZjhmZCwgI2VlZmNmZik7XHJcbiAgICBib3JkZXItcmFkaXVzOjIwcHg7XHJcbiAgICBwYWRkaW5nOjM1cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIHRyYW5zaXRpb246MzAwbXMgYmFja2dyb3VuZDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIFxyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluO1xyXG4gIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAuaXRlbS1saXN0IGxpLmFjdHYgYSxcclxuICAuaXRlbS1saXN0IGxpIGE6aG92ZXIge1xyXG4gIC8vICAgYmFja2dyb3VuZDojMjQyNDg2O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6MjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgfVxyXG4gIC5kb21haW4tdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTozNXB4O1xyXG4gIH1cclxuICAuaXRlbSB7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDozMnB4O1xyXG4gIH1cclxuICAuaXRlbSBzcGFuIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIFxyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZToxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDphdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIH1cclxuICAuYnRuIGkge1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOjMwMG1zIG1hcmdpbi1sZWZ0O1xyXG4gIH1cclxuICAuYWN0aW9uIHtcclxuICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuYWN0aW9uIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDE4cHggNDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzgwODBCOTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxuICB9XHJcbiAgLmFjdGlvbiBhOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzgwODBCOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIFxyXG4gIH1cclxuICBcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgbWluLXdpZHRoOiA0NjBweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICBcclxuICAgIC5idWRnZXQtY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLWJhbm5lci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jdXN0b20tYmFubmVyLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY3VzdG9tLWJhbm5lci1pbWFnZSAuYmFubmVyLXRleHQge1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgY29sb3I6ICNlZWU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJhbm5lci10ZXh0IHtcclxuICAgIG1heC13aWR0aDogMTA4MHB4O1xyXG59XHJcblxyXG4jcXVvdGUge1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KXtcclxuICAgIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDB8TGF0bzozMDAsOTAwXCIpO1xuLmJ1ZGdldC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmNhcmQtaWNvbiB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQwNCk7XG59XG5cbi5pY29uLXNldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMzQ5KTtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA3NXB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAyLjVlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xuICAuaWNvbi1zZXQgLmljb24taXRlbSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxOUQ0REU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIC5pY29uLWNvbnRhaW5lciAubG5yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAyNnB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gLmljb24tY29udGFpbmVyIC5sbnI6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi9hc3NldHMvZmluYW5jaWFsLXN0YXRlbWVudC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbSBoMSwgLmljb24tc2V0IC5pY29uLWl0ZW0gcCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgY29sb3I6ICM1NDU0NTQ7XG4gIG1hcmdpbjogMHB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0gaDEge1xuICBtYXJnaW46IDFlbSAwIDAuMjVlbTtcbiAgY29sb3I6ICMzZDNkM2Q7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuLmljb24tc2V0IC5pY29uLWl0ZW0ubGFzdCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5pY29uLXNldCAuaWNvbi1pdGVtOm50aC1vZi10eXBlKDIpIC5pY29uLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICMxMTkyOTk7XG59XG4uaWNvbi1zZXQgLmljb24taXRlbTpudGgtb2YtdHlwZSgzKSAuaWNvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjMGE1MTU0O1xufVxuXG4uY2xlYXJmaXgge1xuICBjbGVhcjogYm90aDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY29tcG9uZW50LW1lbnUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IGxpIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDIwMHB4IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgLmNvbXBvbmVudC1tZW51LWxpc3QgLml0ZW0tbGlzdCBsaTpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIH1cbn1cbi5jb21wb25lbnQtbWVudSBoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uY29tcG9uZW50LW1lbnUtbGlzdCBoZWFkZXIgaDMge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNvbXBvbmVudC1tZW51LWxpc3QgaGVhZGVyIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWF4LXdpZHRoOiA0NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pdGVtLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaXRlbS1saXN0IGxpIHtcbiAgd2lkdGg6IDI2NXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLml0ZW0tbGlzdCBsaSBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjY3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IDMwMG1zIGJhY2tncm91bmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQzMik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLml0ZW0tbGlzdCBsaS5hY3R2IGEsXG4uaXRlbS1saXN0IGxpIGE6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRvbWFpbi10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5pdGVtIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLml0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idG4gaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNpdGlvbjogMzAwbXMgbWFyZ2luLWxlZnQ7XG59XG5cbi5hY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24gYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMThweCA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjODA4MEI5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMUYxRjM1O1xuICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XG59XG5cbi5hY3Rpb24gYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzgwODBCOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5jdXN0b20tYmFubmVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2UgLmJhbm5lci10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJhbm5lci10ZXh0IHtcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XG59XG5cbiNxdW90ZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZWFkZXItY29udGFpbmVyLmNvbnRhaW5lci1mbHVpZCAucm93LWZsdWlkIC5wYWdlLWNlbnRlciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5jdXN0b20tYmFubmVyLWltYWdlIC5iYW5uZXItdGV4dCB7XG4gICAgcGFkZGluZzogNTBweCAxNXB4O1xuICB9XG59XG4udG9wLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwODBweDtcbiAgaGVpZ2h0OiA2OHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtYmFyIGgxIHtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxNjFjMjk7XG59XG5cbi50b3RhbC1idWRnZXQtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1heC13aWR0aDogMTA4MHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzE2MWMyOTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udG90YWwtYnVkZ2V0LXNlY3Rpb24gaDIge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNThweDtcbiAgY29sb3I6ICMxNjFjMjk7XG59XG4udG90YWwtYnVkZ2V0LXNlY3Rpb24gaDIuZ3JlZW4ge1xuICBjb2xvcjogIzBhZmZhYjtcbn1cbi50b3RhbC1idWRnZXQtc2VjdGlvbiBoMi5yZWQge1xuICBjb2xvcjogI2ZmNTUxYTtcbn1cblxuLmFkZC1pdGVtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtaXRlbS1zZWN0aW9uIC5hZGQtaXRlbS1jb250YWluZXIge1xuICB3aWR0aDogMTA4MHB4O1xufVxuXG4uY2FyZC1pY29uOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmNhcmQtaWNvbjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5jYXJkLWljb246bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZC1pY29uOm50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLml0ZW0tbGlzdCBsaSBhIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCgxKSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDE0OCwgOTksIDAuNzc0KSwgcmdiYSgwLCAxMjgsIDE0NSwgMC43NzQpKTtcbn1cblxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoMikgYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgcmdiYSgwLCAxMjgsIDE0NSwgMC43NzQpLCByZ2JhKDAsIDExNiwgMTE2LCAwLjc3NCkpO1xufVxuXG4uaXRlbS1saXN0IGxpOm50aC1jaGlsZCgzKSBhIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDc1ZGVnLCByZ2JhKDAsIDExNiwgMTE2LCAwLjc3NCksIHJnYmEoMCwgMTA0LCAxNjUsIDAuNzc0KSk7XG59XG5cbi5pdGVtLWxpc3QgbGk6bnRoLWNoaWxkKDQpIGEge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNzVkZWcsIHJnYmEoMCwgMTA0LCAxNjUsIDAuNzc0KSwgcmdiYSgwLCAxMzEsIDEzNiwgMC43NzQpKTtcbn1cblxuLml0ZW0tbGlzdCBsaTpudGgtY2hpbGQoNSkgYSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgIzg1MDNhNSwgIzllMDE5ZSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgIG1pbi13aWR0aDogNDYwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5idWRnZXQtY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAjYnVkZ2V0LWZpcnN0LXAge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICB9XG59XG4uY29tcG9uZW50LW1lbnUtbGlzdCAuaXRlbS1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmN1c3RvbS1iYW5uZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYnVkZ2V0LWJhbm5lci5qcGdcIik7XG59Il19 */"] });
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