import { NgModule, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import {
    MonolithApplicationSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

@NgModule({
    imports: [
        MonolithApplicationSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
    ],
    exports: [
        MonolithApplicationSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class MonolithApplicationSharedCommonModule {
    constructor() {
        registerLocaleData(locale);
    }
}
