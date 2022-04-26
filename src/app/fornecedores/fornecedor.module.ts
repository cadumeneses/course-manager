import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FornecedorInfoComponent } from "./fornecedor-info.component";
import { FornecedorNovoComponent } from "./fornecedor-novo.component";
import { FornecedoresListComponent } from "./fornecedores-list.component";

@NgModule({
    declarations: [
          FornecedoresListComponent,
          FornecedorInfoComponent,
          FornecedorNovoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
             {
                path: 'fornecedor', component:   FornecedoresListComponent
              },
              {
                path: 'fornecedor/info/:id', component: FornecedorInfoComponent
              } ,
              {
                path: 'fornecedor/novo', component: FornecedorNovoComponent
              }                 
         ])
    ]
})

export class FornecedoresModule { 

}