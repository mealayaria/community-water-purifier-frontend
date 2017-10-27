import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav/nav.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    NgZorroAntdModule,
  ],
  declarations: [
    HomeComponent,
    NavComponent,
    LayoutComponent,
  ]
})
export class HomeModule { }
