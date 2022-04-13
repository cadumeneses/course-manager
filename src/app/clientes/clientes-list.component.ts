import { Component, OnInit } from "@angular/core";
import { Clientes } from "./clientes";
import { ClientesService } from "./clientes.service";

@Component({
    templateUrl: './clientes-list.component.html'
})

export class ClientesListComponent implements OnInit {

    filteredClientes: Clientes[] = [];

    _clientes: Clientes[] = [];

    _filterBy!: string;

    constructor(private clientesService: ClientesService){}

    ngOnInit(): void {  
        this.retrieveAll();
    }

    retrieveAll(): void{
        this.clientesService.retrieveAll().subscribe({
            next: clientes => {
                this._clientes = clientes;
                this.filteredClientes = this._clientes;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(clientesId: number): void{
        this.clientesService.deleteById(clientesId).subscribe({
            next: () =>{
                console.log('Deleted with sucess');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredClientes = this._clientes.filter((clientes: Clientes) => clientes.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}