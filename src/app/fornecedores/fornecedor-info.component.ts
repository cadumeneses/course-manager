import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Fornecedor } from "./fornecedor";
import { FornecedorService } from "./fornecedor.service";

@Component ({
    templateUrl: './fornecedor-info.component.html'
})

export class FornecedorInfoComponent implements OnInit{

    fornecedor!: Fornecedor;
    
    
    constructor(private activateRoute: ActivatedRoute, private fornecedorService: FornecedorService){}
    
    ngOnInit(): void {
        this.fornecedorService.retrieveById(+this.activateRoute.snapshot.paramMap.get('id')!).subscribe({
            next: fornecedor => this.fornecedor = fornecedor,
            error: err => console.log('Error', err)
        });     
    }
    
    save(): void{
        this.fornecedorService.save(this.fornecedor).subscribe({
            next: fornecedor => console.log('Saved with success', fornecedor),
            error: err => console.log('Error', err)
        });    }

}