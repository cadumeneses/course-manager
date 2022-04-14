import { Component, OnInit } from "@angular/core";
import { Fornecedor } from "./fornecedor";
import { FornecedorService } from "./fornecedor.service";

@Component({
    templateUrl: './fornecedores-list.component.html'
})

export class FornecedoresListComponent implements OnInit {

    filteredFornecedores: Fornecedor[] = [];

    _fornecedor: Fornecedor[] = [];

    _filterBy!: string;

    constructor(private fornecedorService: FornecedorService){}

    ngOnInit(): void {  
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.fornecedorService.retrieveAll().subscribe({
            next: fornecedor => {
                this._fornecedor = fornecedor;
                this.filteredFornecedores = this._fornecedor;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(fornecedorId: number): void{
        this.fornecedorService.deleteById(fornecedorId).subscribe({
            next: () =>{
                console.log('Deleted with sucess');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredFornecedores = this._fornecedor.filter((fornecedor: Fornecedor) => fornecedor.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}