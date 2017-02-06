import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './categories.routing';
import { Categories } from './categories.component';
/*import { BasicTables } from './components/basicTables/basicTables.component';*/
import { View } from './components/view/view.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
/*import { BasicTablesService } from './components/basicTables/basicTables.service';*/
/*import { ResponsiveTable } from './components/basicTables/components/responsiveTable';
import { StripedTable } from './components/basicTables/components/stripedTable';
import { BorderedTable } from './components/basicTables/components/borderedTable';
import { HoverTable } from './components/basicTables/components/hoverTable';
import { CondensedTable } from './components/basicTables/components/condensedTable';
import { ContextualTable } from './components/basicTables/components/contextualTable';*/
import { ViewService } from './components/view/view.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Categories,
    View
/*    BasicTables,
    SmartTables,
    HoverTable,
    BorderedTable,
    CondensedTable,
    StripedTable,
    ContextualTable,
    ResponsiveTable*/
  ],
  providers: [
    ViewService
    /*BasicTablesService,
    SmartTablesService*/
  ]
})
export default class CategoriesModule {}
