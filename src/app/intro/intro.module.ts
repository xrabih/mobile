import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntroPage } from './intro.page';
import { PipesModule } from 'src/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: IntroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule,
  ],
  declarations: [IntroPage]
})
export class IntroPageModule {}
