import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LookupComponent } from './lookup/lookup.component'
import { BuildComponent } from './build/build.component'

const routes: Routes = [
    { path: '', component: LookupComponent }, // opted for component route rather than redirectTo: '/lookup'
    { path: 'lookup', component: LookupComponent },
    { path: 'build', component: BuildComponent },
    { path: 'build/:identifier', component: BuildComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
