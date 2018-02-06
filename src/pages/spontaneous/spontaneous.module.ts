import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpontaneousPage } from './spontaneous';

@NgModule({
  declarations: [
    SpontaneousPage,
  ],
  imports: [
    IonicPageModule.forChild(SpontaneousPage),
  ],
})
export class SpontaneousPageModule {}
