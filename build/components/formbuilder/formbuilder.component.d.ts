import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { FormioAppConfig } from '../../formio.config';
import { FormioForm, FormioOptions } from '../../formio.common';
export declare class FormBuilderComponent implements AfterViewInit {
    private config;
    ready: Promise<object>;
    readyResolve: any;
    formio: any;
    form?: FormioForm;
    options?: FormioOptions;
    change?: EventEmitter<object>;
    builderElement?: ElementRef;
    constructor(config: FormioAppConfig);
    ngAfterViewInit(): void;
}
