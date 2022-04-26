import { Fornecedor } from "./fornecedor";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FornecedorService {

    private FornecedorUrl: string = 'http://localhost:3200/api/fornecedor';

    constructor(private httpClient: HttpClient){ }

    retrieveAll(): Observable<Fornecedor[]> {
        return this.httpClient.get<Fornecedor[]>(this.FornecedorUrl);
    }

    retrieveById(id: number): Observable<Fornecedor> {
        return this.httpClient.get<Fornecedor>(`${this.FornecedorUrl}/${id}`);
    }

    save(clientes: Fornecedor): Observable<Fornecedor> {
        if (Fornecedor.id) {
            return this.httpClient.put<Fornecedor>(`${this.FornecedorUrl}/${Fornecedor.id}`, Fornecedor);
        }else{
            return this.httpClient.post<Fornecedor>(`${this.FornecedorUrl}`, Fornecedor);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.FornecedorUrl}/${id}`);
    }

}