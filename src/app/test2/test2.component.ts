import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {BaseAction} from "../store/base.actions";

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  baseStore;
  constructor(private store: Store<any>){
  }
  title = 'rbix';
  test() {
    console.log(this.baseStore);
  }

  changeStore() {
    this.store.dispatch(new BaseAction(Math.ceil(Math.random() * 10)))
  }

  ngOnInit(){
    this.store.pipe(select('base')).subscribe(res =>{
      this.baseStore = res;
    });
  }

}
