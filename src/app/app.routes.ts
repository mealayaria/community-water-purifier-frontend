export const appRoutes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    // component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
    // pathMatch: 'full',
  }
];
