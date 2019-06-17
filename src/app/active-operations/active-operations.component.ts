import { Component, OnInit } from '@angular/core';
import { GetNbEntityService } from '../get-nb-entity.service';

@Component({
  selector: 'app-active-operations',
  templateUrl: './active-operations.component.html',
  styleUrls: ['./active-operations.component.css']
})
export class ActiveOperationsComponent implements OnInit {

    constructor(private nbEntityService: GetNbEntityService) {
    }

    ngOnInit() {
        this.nbEntityService.getNbEntity('http://localhost:8000/api/operations/').then(
            res => {
                /*console.log(res);*/ /*Décommentez pour voir le resultat dans la console*/
            }
        ).catch( e => {
            alert('error fetching data');
        });
    }

}
