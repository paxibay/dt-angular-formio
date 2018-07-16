/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormioAlerts } from './formio.alerts';
var FormioAlertsComponent = /** @class */ (function () {
    function FormioAlertsComponent() {
        this.alerts = new FormioAlerts();
    }
    FormioAlertsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'formio-alerts',
                    template: "<div *ngFor=\"let alert of alerts.alerts\" class=\"alert alert-{{ alert.type }}\" role=\"alert\">{{ alert.message }}</div> "
                },] },
    ];
    /** @nocollapse */
    FormioAlertsComponent.ctorParameters = function () { return []; };
    FormioAlertsComponent.propDecorators = {
        "alerts": [{ type: Input },],
    };
    return FormioAlertsComponent;
}());
export { FormioAlertsComponent };
function FormioAlertsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FormioAlertsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FormioAlertsComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FormioAlertsComponent.propDecorators;
    /** @type {?} */
    FormioAlertsComponent.prototype.alerts;
}
