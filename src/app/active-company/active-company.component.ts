import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {Response} from '@angular/http';

@Component({
    selector: 'app-active-company',
    templateUrl: './active-company.component.html',
    styleUrls: ['./active-company.component.css']
})
export class ActiveCompanyComponent implements OnInit {

    public nextToken: string;
    public lastQuery: string;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        const resultat = this.callApi();
        console.log(resultat);
    }

    callApi() {
        return this.httpClient.get('http://localhost:8000/api/company/')
            .pipe(map(results => {
                return results.companyActive;
            }))
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
    }
}
