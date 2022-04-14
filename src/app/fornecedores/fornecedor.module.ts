import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FornecedorInfoComponent } from "./fornecedor-info.component";
import { FornecedoresListComponent } from "./fornecedores-list.component";

@NgModule({
    declarations: [
          FornecedoresListComponent,
          FornecedorInfoComponent
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
              }               
         ])
    ]
})

export class FornecedoresModule { 

}