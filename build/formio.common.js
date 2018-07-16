/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function ConditionalOptions() { }
function ConditionalOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ConditionalOptions.prototype.show;
    /** @type {?|undefined} */
    ConditionalOptions.prototype.when;
    /** @type {?|undefined} */
    ConditionalOptions.prototype.eq;
}
/**
 * @record
 */
export function ValidateOptions() { }
function ValidateOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ValidateOptions.prototype.required;
    /** @type {?|undefined} */
    ValidateOptions.prototype.custom;
    /** @type {?|undefined} */
    ValidateOptions.prototype.customPrivate;
}
/**
 * @record
 * @template T, V
 */
export function ComponentOptions() { }
function ComponentOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ComponentOptions.prototype.defaultValue;
    /** @type {?|undefined} */
    ComponentOptions.prototype.type;
    /** @type {?|undefined} */
    ComponentOptions.prototype.key;
    /** @type {?|undefined} */
    ComponentOptions.prototype.label;
    /** @type {?|undefined} */
    ComponentOptions.prototype.input;
    /** @type {?|undefined} */
    ComponentOptions.prototype.required;
    /** @type {?|undefined} */
    ComponentOptions.prototype.multiple;
    /** @type {?|undefined} */
    ComponentOptions.prototype.protected;
    /** @type {?|undefined} */
    ComponentOptions.prototype.unique;
    /** @type {?|undefined} */
    ComponentOptions.prototype.persistent;
    /** @type {?|undefined} */
    ComponentOptions.prototype.tableView;
    /** @type {?|undefined} */
    ComponentOptions.prototype.lockKey;
    /** @type {?|undefined} */
    ComponentOptions.prototype.validate;
    /** @type {?|undefined} */
    ComponentOptions.prototype.conditional;
    /** @type {?|undefined} */
    ComponentOptions.prototype.customConditional;
}
/**
 * @record
 */
export function FormioRefreshValue() { }
function FormioRefreshValue_tsickle_Closure_declarations() {
    /** @type {?} */
    FormioRefreshValue.prototype.property;
    /** @type {?} */
    FormioRefreshValue.prototype.value;
}
/**
 * @record
 */
export function AccessSetting() { }
function AccessSetting_tsickle_Closure_declarations() {
    /** @type {?} */
    AccessSetting.prototype.type;
    /** @type {?} */
    AccessSetting.prototype.roles;
}
/**
 * @record
 */
export function FormioForm() { }
function FormioForm_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    FormioForm.prototype.title;
    /** @type {?|undefined} */
    FormioForm.prototype.display;
    /** @type {?|undefined} */
    FormioForm.prototype.name;
    /** @type {?|undefined} */
    FormioForm.prototype.path;
    /** @type {?|undefined} */
    FormioForm.prototype.type;
    /** @type {?|undefined} */
    FormioForm.prototype.project;
    /** @type {?|undefined} */
    FormioForm.prototype.template;
    /** @type {?|undefined} */
    FormioForm.prototype.components;
    /** @type {?|undefined} */
    FormioForm.prototype.tags;
    /** @type {?|undefined} */
    FormioForm.prototype.access;
    /** @type {?|undefined} */
    FormioForm.prototype.submissionAccess;
}
/**
 * @record
 */
export function AlertsOptions() { }
function AlertsOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    AlertsOptions.prototype.submitMessage;
}
/**
 * @record
 */
export function ErrorsOptions() { }
function ErrorsOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    ErrorsOptions.prototype.message;
}
var FormioError = /** @class */ (function () {
    function FormioError(message, component) {
        this.message = message;
        this.component = component;
    }
    return FormioError;
}());
export { FormioError };
function FormioError_tsickle_Closure_declarations() {
    /** @type {?} */
    FormioError.prototype.message;
    /** @type {?} */
    FormioError.prototype.component;
}
/**
 * @record
 */
export function FormioHookOptions() { }
function FormioHookOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FormioHookOptions.prototype.beforeSubmit;
}
/**
 * @record
 */
export function FormioOptions() { }
function FormioOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    FormioOptions.prototype.errors;
    /** @type {?|undefined} */
    FormioOptions.prototype.alerts;
    /** @type {?|undefined} */
    FormioOptions.prototype.disableAlerts;
    /** @type {?|undefined} */
    FormioOptions.prototype.i18n;
    /** @type {?|undefined} */
    FormioOptions.prototype.fileService;
    /** @type {?|undefined} */
    FormioOptions.prototype.hooks;
}
