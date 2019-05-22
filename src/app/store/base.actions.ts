import { Action } from '@ngrx/store';

export enum ActionTypes {
  GetBase = '[Get Base] base',
  RequestBase = '[Req Base] base',
}

export class BaseAction implements Action {
  readonly type = ActionTypes.GetBase;
  constructor(public payload: number) {}
}

export class RequestAction implements Action {
  readonly type = ActionTypes.RequestBase;
  constructor(public payload: any) {}
}

export type  Union = BaseAction | RequestAction;
