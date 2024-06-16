// Interface automatically generated by schemas-to-ts

import { Response } from '../../../response/content-types/response/response';
import { Response_Plain } from '../../../response/content-types/response/response';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum ResponseStatus {
   = 'на рассмотрении',
   = 'приглашён на собеседование',
   = 'принят',
   = 'отказано',}

export interface ResponseStatus {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    response_status: ResponseStatus;
    responses: { data: Response[] };
  };
}
export interface ResponseStatus_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  response_status: ResponseStatus;
  responses: Response_Plain[];
}

export interface ResponseStatus_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  response_status: ResponseStatus;
  responses: number[];
}

export interface ResponseStatus_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  response_status: ResponseStatus;
  responses: AdminPanelRelationPropertyModification<Response_Plain>;
}
