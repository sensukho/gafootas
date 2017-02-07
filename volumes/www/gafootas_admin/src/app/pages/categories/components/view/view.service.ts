import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ViewService{
    public baseUrl: string;

    constructor(private _http: Http){
        this.baseUrl = 'http://api.gafootas.com/';
    }

    getCategories(){
        return this._http.get(this.baseUrl + 'category/list').map( res => res.json() );
    }
}
