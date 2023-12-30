import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class GeneralService{
    baseUrl="http://172.17.0.4:8080/"

    header={
        "Content-Type": "application/json"
    }
}