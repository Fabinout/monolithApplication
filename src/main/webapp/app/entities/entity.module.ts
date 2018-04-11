import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MonolithApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { MonolithApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { MonolithApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { MonolithApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { MonolithApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { MonolithApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { MonolithApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { MonolithApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MonolithApplicationRegionMySuffixModule,
        MonolithApplicationCountryMySuffixModule,
        MonolithApplicationLocationMySuffixModule,
        MonolithApplicationDepartmentMySuffixModule,
        MonolithApplicationTaskMySuffixModule,
        MonolithApplicationEmployeeMySuffixModule,
        MonolithApplicationJobMySuffixModule,
        MonolithApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonolithApplicationEntityModule {}
