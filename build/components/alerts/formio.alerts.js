/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function FormioAlert() { }
function FormioAlert_tsickle_Closure_declarations() {
    /** @type {?} */
    FormioAlert.prototype.type;
    /** @type {?} */
    FormioAlert.prototype.message;
}
var FormioAlerts = /** @class */ (function () {
    function FormioAlerts() {
        this.alerts = [];
    }
    /**
     * @param {?} alert
     * @return {?}
     */
    FormioAlerts.prototype.setAlert = /**
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        this.alerts = [alert];
    };
    /**
     * @param {?} alert
     * @return {?}
     */
    FormioAlerts.prototype.addAlert = /**
     * @param {?} alert
     * @return {?}
     */
    function (alert) {
        this.alerts.push(alert);
    };
    /**
     * @param {?} alerts
     * @return {?}
     */
    FormioAlerts.prototype.setAlerts = /**
     * @param {?} alerts
     * @return {?}
     */
    function (alerts) {
        this.alerts = alerts;
    };
    return FormioAlerts;
}());
export { FormioAlerts };
function FormioAlerts_tsickle_Closure_declarations() {
    /** @type {?} */
    FormioAlerts.prototype.alerts;
}
