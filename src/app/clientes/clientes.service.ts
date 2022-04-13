import { Clientes } from "./clientes";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ClientesService {

    private clientesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient){ }

    retrieveAll(): Observable<Clientes[]> {
        return this.httpClient.get<Clientes[]>(this.clientesUrl);
    }

    retrieveById(id: number): Observable<Clientes> {
        return this.httpClient.get<Clientes>(`${this.clientesUrl}/${id}`);
    }

    save(clientes: Clientes): Observable<Clientes> {
        console.log(clientes)
        if (clientes.id) {
            return this.httpClient.put<Clientes>(`${this.clientesUrl}/${clientes.id}`, clientes);
        }else{
            return this.httpClient.post<Clientes>(`${this.clientesUrl}`, clientes);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.clientesUrl}/${id}`);
    }

}