import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ActionTypes, BaseAction, RequestAction} from "./store/base.actions";
import {GithubreposService} from "./githubrepos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GithubreposService]
})
export class AppComponent {
  baseStore;
  constructor(
    private store: Store<any>,
    private myservice: GithubreposService
              ){
  }
  title = 'NGRX';
  test() {
    console.log(this.baseStore);
  }

  changeStore() {
    this.store.dispatch(new BaseAction(Math.ceil(Math.random() * 10)))
  }
  getRepos(){
    this.myservice.getAll().subscribe(res => {
      this.store.dispatch(new RequestAction(res['items']))
    })
  }

  ngOnInit(){
    this.store.pipe(select('base')).subscribe(res =>{
      this.baseStore = res;
    });
  }

}
