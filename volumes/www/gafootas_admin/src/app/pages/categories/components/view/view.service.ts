import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ViewService{
    public baseUrl: string;

    constructor(private _http: Http){
        this.baseUrl = 'http://192.168.0.110:4200/api/';
    }

    getCategories(){
        return this._http.get(this.baseUrl + 'category/list').map( res => res.json() );
    }
}
