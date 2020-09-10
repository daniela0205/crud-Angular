import { Component, OnInit } from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job.service';
import {Global} from '../../services/global';
import {Router,ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [JobService]
})
// This class is to implement the update a job existed 

export class EditComponent implements OnInit {
  public name: string;
  public job: Job;
  public status: string;
  public url:string;
  
  constructor(
    private _jobService: JobService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.name = "Update Job";
    this.url = Global.url;
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params.id;
      this.getJob(id);
    });
  }

  getJob(id){
    this._jobService.getJob(id).subscribe(
      response =>{
        this.job=response.job;
      },
      error => {
        console.log(<any>error);
      }
      
    );
  }

  onSumbit(form){
    console.log(this.job);
    this._jobService.updateJob(this.job).subscribe(
      response => {
        if (response.job){

          this.status='success';
          form.reset();
          
        }
        else{
          this.status='failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
}
}
