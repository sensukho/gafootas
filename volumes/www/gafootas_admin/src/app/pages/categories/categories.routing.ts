import { Routes, RouterModule }  from '@angular/router';

import { Categories } from './categories.component';
/*import { BasicTables } from './components/basicTables/basicTables.component';*/
import { View } from './components/view/view.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Categories,
    children: [
      /*{ path: 'basictables', component: BasicTables },*/
      { path: 'view', component: View }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
