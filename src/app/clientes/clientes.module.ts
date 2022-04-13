import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientesInfoComponent } from "./clientes-info.component";
import { ClientesListComponent } from "./clientes-list.component";
import { ClientesNovoComponent } from "./clientes-novo.component";

@NgModule({
    declarations: [
          ClientesListComponent,
          ClientesInfoComponent,
          ClientesNovoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
             {
                path: 'clientes', component:   ClientesListComponent
              },
              {
                path: 'clientes/info/:id', component: ClientesInfoComponent
              },
              {
                path: 'clientes/novo', component: ClientesNovoComponent
              }                 
         ])
    ]
})

export class ClientesModule { 

}