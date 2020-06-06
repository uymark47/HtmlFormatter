(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group [selectedIndex]=\"selectedTabIndex\" (selectedIndexChange)=\"onChangeIndex($event)\">\n  <mat-tab label=\"Edit\"><app-editor></app-editor></mat-tab>\n  <mat-tab label=\"Sort Data\"><app-sort></app-sort></mat-tab>\n  <mat-tab label=\"View Data\"><app-viewer></app-viewer></mat-tab>\n</mat-tab-group>\n\n<!-- <router-outlet></router-outlet> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-container\">\n  <form [formGroup]=\"editorForm\" class=\"form\">\n    <div class=\"radio-container\">\n      <mat-label>Rank</mat-label>\n      <!-- <input formControlName=\"rank\" type=\"number\" matInput> -->\n      <mat-radio-group color=\"primary\" class=\"radio-group\" formControlName=\"rank\" aria-label=\"Select an option\">\n        <mat-radio-button [value]=\"1\">1</mat-radio-button>\n        <mat-radio-button [value]=\"2\">2</mat-radio-button>\n        <mat-radio-button [value]=\"3\">3</mat-radio-button>\n        <mat-radio-button [value]=\"4\">4</mat-radio-button>\n        <mat-radio-button [value]=\"5\">5</mat-radio-button>\n        <mat-radio-button [value]=\"6\">6</mat-radio-button>\n        <mat-radio-button [value]=\"7\">7</mat-radio-button>\n        <mat-radio-button [value]=\"0\">0</mat-radio-button>\n      </mat-radio-group>\n    </div>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>Title</mat-label>\n      <input formControlName=\"title\" matInput>\n    </mat-form-field>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>Body</mat-label>\n      <textarea cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" cdkAutosizeMinRows=\"5\" formControlName=\"body\"\n        matInput></textarea>\n    </mat-form-field>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>link</mat-label>\n      <input formControlName=\"link\" matInput>\n    </mat-form-field>\n    <mat-form-field appearance=\"standard\">\n      <mat-label>source</mat-label>\n      <input type=\"text\" formControlName=\"source\" matInput [matAutocomplete]=\"auto\">\n\n      <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let option of filteredSources | async\" [value]=\"option\">\n          {{option}}\n        </mat-option>\n      </mat-autocomplete>\n\n    </mat-form-field>\n    <div appearance=\"fill\">\n      <mat-checkbox formControlName=\"paywall\">Paywall</mat-checkbox>\n    </div>\n    <div class=\"button\" *ngIf=\"!selectedData\">\n      <button mat-flat-button color=\"primary\" (click)=\"submit()\">Submit</button>\n    </div>\n    <div class=\"button\" *ngIf=\"selectedData\">\n      <button mat-flat-button color=\"primary\" (click)=\"update()\">Update</button>\n    </div>\n  </form>\n  <!-- <div class=\"button\" *ngIf=\"!selectedData\">\n    <button mat-flat-button color=\"primary\" (click)=\"submit()\">Submit</button>\n  </div>\n  <div class=\"button\" *ngIf=\"selectedData\">\n    <button mat-flat-button color=\"primary\" (click)=\"update()\">Update</button>\n  </div> -->\n  <div class=\"button\" style=\"align-self: flex-end;\">\n    <button mat-flat-button color=\"warn\" (click)=\"clear()\">Clear Data</button>\n  </div>\n  <hr>\n  <div *ngFor=\"let source of editorService.newsSources; let i = index\">\n    {{ i + 1 }}. {{ source.source }} - {{ source.count }}\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"editorService.dataBank.length > 0\" cdkDropList class=\"example-list\" (cdkDropListDropped)=\"editorService.drop($event)\">\n    <mat-list style=\"width:100%; word-wrap:break-word;\" role=\"list\" class=\"list\" *ngFor=\"let item of editorService.dataBank; let i = index\"\n        cdkDrag>\n        <mat-list-item [matTooltip]=\"item.body\" role=\"listitem\">\n            <div mat-line>\n                Rank: {{item.rank}}. {{item.title}}\n            </div>\n            <div mat-line>\n                {{item.source}} {{ item.paywall ? '-' : '' }} <span style=\"color: red\">{{ item.paywall ? ' Paywall' : '' }}</span>\n            </div>\n            <div style=\"display: flex; flex-direction: row; margin: auto\">\n                <button mat-flat-button style=\"margin: 5px; padding: 5px;\" color=\"primary\" (click)=\"edit(i, item)\">Update</button>\n                <button mat-flat-button style=\"margin: 5px;\" color=\"warn\" (click)=\"delete(i, item)\">Clear Data</button>\n            </div>\n        </mat-list-item>\n    </mat-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/viewer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/viewer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let data of editorService.dataBank\">\n    {{data.formatTitle}} <br>\n    {{data.body}} <br>\n    {{data.formatSource}} <br> <br>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor.service.ts");



let AppComponent = class AppComponent {
    constructor(editorService) {
        this.editorService = editorService;
        this.title = 'HtmlFormat';
        this.selectedTabIndex = -1;
        this.editorService.selectData.subscribe((res) => {
            if (res) {
                this.selectedTabIndex = -1;
            }
        });
    }
    onChangeIndex(i) {
        this.selectedTabIndex = i;
    }
};
AppComponent.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewer/viewer.component */ "./src/app/viewer/viewer.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _sort_sort_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sort/sort.component */ "./src/app/sort/sort.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_5__["ViewerComponent"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], _sort_sort_component__WEBPACK_IMPORTED_MODULE_13__["SortComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_17__["StorageServiceModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
        ],
        entryComponents: [_editor_editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"]],
        providers: [_editor_service__WEBPACK_IMPORTED_MODULE_11__["EditorService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/editor.service.ts":
/*!***********************************!*\
  !*** ./src/app/editor.service.ts ***!
  \***********************************/
/*! exports provided: News, EditNews, SourceCount, EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News", function() { return News; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNews", function() { return EditNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceCount", function() { return SourceCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "./node_modules/ngx-webstorage-service/fesm2015/ngx-webstorage-service.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let News = class News {
    constructor() {
        this.rank = 0;
    }
};
News = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], News);

class EditNews {
}
class SourceCount {
    constructor() {
        this.count = 0;
    }
}
let EditorService = class EditorService {
    constructor(storage) {
        this.storage = storage;
        this.dataBank = [];
        this.selectData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newsSources = [];
        this.newSourceAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sources = this.getItems("sources");
    }
    select(index, item) {
        this.selectData.emit({ index, news: item });
    }
    addNews(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            data.body = data.body.trim();
            data.title = data.title.trim();
            // if (data.rank && data.rank > 0) {
            //   data.rank -= 1;
            //   this.dataBank.splice(data.rank, 0, data);
            // } else {
            // }
            this.dataBank.push(data);
            this.handleRank();
            this.formatDataBank();
            this.countSources();
            this.checkAndAddSource(data.source);
        });
    }
    edit(data, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(index);
            this.dataBank[index] = data;
            // if (data.rank && data.rank > 0) {
            //   this.dataBank = [
            //     ..._.slice(this.dataBank, 0, index),
            //     ..._.slice(this.dataBank, index + 1, this.dataBank.length)
            //   ];
            //   data.rank -= 1;
            //   this.dataBank.splice(data.rank, 0, data);
            // }
            this.handleRank();
            this.countSources();
            this.formatDataBank();
        });
    }
    formatDataBank() {
        this.storage.remove("current");
        this.addItems(this.dataBank, "current");
        for (const data of this.dataBank) {
            data.formatTitle = `<strong><em><a href = "${data.link}">${data.title}</a></em></strong>`;
            data.formatSource = data.paywall
                ? `<em>-- ${data.source}</em> (paywall)`
                : `<em>-- ${data.source}</em>`;
        }
    }
    drop(event) {
        const changeItemIndex = this.dataBank[event.previousIndex];
        this.dataBank = [
            ...lodash__WEBPACK_IMPORTED_MODULE_2__["slice"](this.dataBank, 0, event.previousIndex),
            ...lodash__WEBPACK_IMPORTED_MODULE_2__["slice"](this.dataBank, event.previousIndex + 1, this.dataBank.length),
        ];
        changeItemIndex.rank = event.currentIndex
            ? this.dataBank[event.currentIndex - 1].rank
            : 1;
        this.dataBank.splice(event.currentIndex, 0, changeItemIndex);
        this.formatDataBank();
    }
    removeOne(index) {
        this.dataBank.splice(index, 1);
        this.formatDataBank();
    }
    addItems(items, key) {
        this.storage.set(key, JSON.stringify(items));
    }
    clearItems() {
        this.dataBank = [];
        this.newsSources = [];
        this.storage.remove("current");
    }
    getItems(key) {
        try {
            return JSON.parse(this.storage.get(key));
        }
        catch (e) { }
    }
    initialSetup() {
        const items = this.getItems("current");
        this.sources = this.getItems("sources");
        console.log("hm");
        this.newSourceAdded.emit(this.sources);
        if (items && items.length > 0) {
            this.dataBank = items;
        }
        this.countSources();
        this.formatDataBank();
    }
    checkAndAddSource(newSource) {
        let sourceExist = false;
        if (this.sources && this.sources.length > 0) {
            for (const source of this.sources) {
                if (source === newSource) {
                    sourceExist = true;
                }
            }
            if (!sourceExist) {
                this.sources = [newSource, ...this.sources];
                this.addItems(this.sources, "sources");
            }
        }
        else {
            this.sources = [newSource];
            this.addItems(this.sources, "sources");
        }
        if (!sourceExist) {
            this.newSourceAdded.emit(this.sources);
        }
    }
    getItem(i) {
        return this.dataBank[i];
    }
    countSources() {
        this.newsSources = [];
        for (const news of this.dataBank) {
            const sourceIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.newsSources, {
                source: news.source,
            });
            if (sourceIndex < 0) {
                const newSource = {
                    source: news.source,
                    count: 1,
                };
                this.newsSources.push(newSource);
            }
            else {
                this.newsSources[sourceIndex].count += 1;
            }
        }
    }
    handleRank() {
        let rankedNews = [];
        let unrankedNews = [];
        for (const news of this.dataBank) {
            if (news.rank > 0) {
                rankedNews.push(news);
            }
            else {
                unrankedNews.push(news);
            }
        }
        rankedNews.sort((a, b) => {
            return a.rank - b.rank;
        });
        // rankedNews = this.shuffleNews(rankedNews);
        this.dataBank = [...rankedNews, ...unrankedNews];
    }
    // shuffleNews(rankedNews: News[]) {
    //     let shuffledRankedNews: News[] = [];
    //     for (let x = 1; x < 6; x++) {
    //         const sameRank: News[] = [];
    //         for (const news of rankedNews) {
    //             if (news.rank === x) {
    //                 sameRank.push(news);
    //             }
    //         }
    //         const shuffledNews = shuffle(sameRank);
    //         shuffledRankedNews.push(...shuffledNews);
    //     }
    //     console.log(shuffledRankedNews);
    //     return shuffledRankedNews;
    // }
    duplicateCheck(news) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const title = yield this.duplicateTitleCheck(news);
            if (title) {
                return true;
            }
            const body = yield this.duplicateBodyCheck(news);
            if (body) {
                return true;
            }
            const url = yield this.duplicateURLCheck(news);
            if (url) {
                return true;
            }
            return false;
        });
    }
    duplicateTitleCheck(news) {
        const duplicateTitleIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.dataBank, {
            title: news.title,
        });
        if (duplicateTitleIndex >= 0) {
            return this.duplicateHandler("Title");
        }
        else {
            return new Promise((resolve) => {
                return resolve(false);
            });
        }
    }
    duplicateBodyCheck(news) {
        const duplicateBodyIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.dataBank, { body: news.body });
        if (duplicateBodyIndex >= 0) {
            return this.duplicateHandler("Body");
        }
        else {
            return new Promise((resolve) => {
                return resolve(false);
            });
        }
    }
    duplicateURLCheck(news) {
        const duplicateUrlIndex = lodash__WEBPACK_IMPORTED_MODULE_2__["findIndex"](this.dataBank, { link: news.link });
        if (duplicateUrlIndex >= 0) {
            // duplicate exist
            return this.duplicateHandler("URL");
        }
        else {
            return new Promise((resolve) => {
                return resolve(false);
            });
        }
    }
    duplicateHandler(duplicateProp) {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `Duplicated ${duplicateProp}`,
            text: "Are you sure you want to add?",
            type: "error",
            confirmButtonText: "Add",
            confirmButtonColor: "#f44336",
            showCancelButton: true,
        }).then((result) => {
            if (result && result.value) {
                return false;
            }
            else {
                return true;
            }
        });
    }
};
EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]))
], EditorService);



/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 32px;\n}\n\n.form {\n  background-color: #FEF6DF;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  max-width: 640px;\n  border: 3px solid rgba(0, 0, 0, .5);\n  border-radius: 8px;\n  padding: 24px;\n}\n\n.button {\n  margin-top: 16px;\n}\n\n.radio-container {\n  margin-bottom: 16px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.radio-group {\n  width: 60%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAzMnB4O1xufVxuXG4uZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUY2REY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ucmFkaW8tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJhZGlvLWdyb3VwIHtcbiAgd2lkdGg6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let EditorComponent = class EditorComponent {
    constructor(formBuilder, editorService) {
        this.formBuilder = formBuilder;
        this.editorService = editorService;
        this.sources = [];
        this.index = 0;
        this.id = 0;
        this.setUpForm();
        this.editorService.initialSetup();
    }
    ngOnInit() {
        this.editorService.countSources();
        this.sources = this.editorService.sources ? this.editorService.sources : [];
        this.editorService.selectData.subscribe((res) => {
            this.selectedData = res.news;
            this.index = res.index;
            this.patchData(res.news);
        });
        this.subscribeToSourceChanges();
        this.subscribeToSource();
    }
    setUpForm() {
        this.editorForm = this.formBuilder.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.id),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            link: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            source: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            paywall: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rank: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0),
        });
    }
    patchData(data) {
        console.log(data);
        this.editorForm.patchValue({ id: data.id });
        this.editorForm.patchValue({ title: data.title });
        this.editorForm.patchValue({ body: data.body });
        this.editorForm.patchValue({ link: data.link });
        this.editorForm.patchValue({ source: data.source });
        this.editorForm.patchValue({ paywall: data.paywall });
        this.editorForm.patchValue({ rank: data.rank });
    }
    update() {
        if (this.editorForm.valid) {
            const data = this.editorForm.value;
            this.editorService.edit(data, this.index);
            this.clearData();
        }
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.editorForm.valid) {
                const data = this.editorForm.value;
                const mindTheDuplicate = yield this.editorService.duplicateCheck(data);
                if (!mindTheDuplicate) {
                    this.editorService.addNews(data);
                    this.id += 1;
                    this.clearData();
                }
            }
        });
    }
    clearData() {
        this.editorForm.patchValue({ title: "" });
        this.editorForm.patchValue({ body: "" });
        this.editorForm.patchValue({ link: "" });
        this.editorForm.patchValue({ rank: 0 });
        this.editorForm.patchValue({ paywall: false });
        this.index = 0;
        this.selectedData = null;
    }
    clear() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: `Delete Data`,
            text: "Are you sure?",
            type: "error",
            confirmButtonText: "Delete",
            confirmButtonColor: "#f44336",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.editorService.clearItems();
            }
        });
    }
    subscribeToSourceChanges() {
        this.filteredSources = this.editorForm.controls["source"].valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((value) => this.filter(value)));
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        if (this.sources.length === 0) {
            return;
        }
        return this.sources.filter((option) => option.toLowerCase().indexOf(filterValue) === 0);
    }
    subscribeToSource() {
        console.log(this.editorService.selectData);
        console.log(this.editorService.newSourceAdded);
        this.editorService.newSourceAdded.subscribe((res) => {
            this.sources = res;
        });
    }
};
EditorComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"] }
];
EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-editor",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./editor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/editor/editor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")).default]
    })
], EditorComponent);



/***/ }),

/***/ "./src/app/sort/sort.component.css":
/*!*****************************************!*\
  !*** ./src/app/sort/sort.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  max-width: 840px;\n}\n\n.list:hover {\n  background-color:#FEF6DF;\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc29ydC9zb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiA4NDBweDtcbn1cblxuLmxpc3Q6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNGRUY2REY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/sort/sort.component.ts":
/*!****************************************!*\
  !*** ./src/app/sort/sort.component.ts ***!
  \****************************************/
/*! exports provided: SortComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortComponent", function() { return SortComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let SortComponent = class SortComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() { }
    delete(index, item) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: `Delete ${item.title}`,
            text: "Are you sure?",
            type: "error",
            confirmButtonText: "Delete",
            confirmButtonColor: "#f44336",
            showCancelButton: true,
        }).then((result) => {
            if (result.value) {
                this.editorService.removeOne(index);
            }
        });
    }
    edit(i, item) {
        this.editorService.select(i, item);
    }
};
SortComponent.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] }
];
SortComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sort",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sort.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sort/sort.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sort.component.css */ "./src/app/sort/sort.component.css")).default]
    })
], SortComponent);



/***/ }),

/***/ "./src/app/viewer/viewer.component.css":
/*!*********************************************!*\
  !*** ./src/app/viewer/viewer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/viewer/viewer.component.ts":
/*!********************************************!*\
  !*** ./src/app/viewer/viewer.component.ts ***!
  \********************************************/
/*! exports provided: ViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerComponent", function() { return ViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor.service.ts");



let ViewerComponent = class ViewerComponent {
    constructor(editorService) {
        this.editorService = editorService;
    }
    ngOnInit() {
    }
};
ViewerComponent.ctorParameters = () => [
    { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["EditorService"] }
];
ViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/viewer/viewer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./viewer.component.css */ "./src/app/viewer/viewer.component.css")).default]
    })
], ViewerComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/markuy/Projects/HtmlFormatter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map