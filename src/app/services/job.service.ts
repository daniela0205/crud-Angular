import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';  

import {Observable} from 'rxjs/Observable';
import {Job} from '../models/job';
import {Global} from './global';

// here I applied the injection dependecy to define the differents service that will have the site


@Injectable()
export class JobService{
    public url: string;

    constructor(
        private _http:HttpClient
    ){
        this.url = Global.url;
    }

    testService(){
        return 'Angular Work!';
    }

    // service to save a new Job

    saveJob(job: Job): Observable<any>{
        let params = JSON.stringify(job);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

            return this._http.post(this.url+'savejob',params,{headers:headers});
    }

    // service to get all jobs 

    getJobs(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'jobs',{headers:headers});
    }
   
    // service to get a job

    getJob(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'job/'+id,{headers:headers});
    }

    // service to delete a job

    deleteJob(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'job/'+id,{headers:headers});
    }

    // service to update a Job
    updateJob(job):Observable<any>{
        let params = JSON.stringify(job);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url+'job/'+job._id, params ,{headers:headers});
    }

}