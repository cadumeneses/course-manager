import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Clientes } from "./clientes";
import { ClientesService } from "./clientes.service";

@Component ({
    templateUrl: './clientes-novo.component.html'
})

export class ClientesNovoComponent implements OnInit{

    clientes: Clientes = new Clientes();
    
    
    constructor(private activateRoute: ActivatedRoute, private clientesService: ClientesService){}
    
    ngOnInit(): void {
    //    this.clientesService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe({
    //         next: clientes => this.clientes = clientes,
    //         error: err => console.log('Error', err)
    //     });     
    }
    
    save(): void{
        this.clientesService.save(this.clientes).subscribe({
            next: clientes => console.log('Saved with success', clientes),
            error: err => console.log('Error', err)
        });  
      }

}