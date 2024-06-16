// Interface automatically generated by schemas-to-ts

import { Student } from '../../../student/content-types/student/student';
import { Direction } from '../../../direction/content-types/direction/direction';
import { Student_Plain } from '../../../student/content-types/student/student';
import { Direction_Plain } from '../../../direction/content-types/direction/direction';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Group {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    group_name: string;
    degree_program: string;
    students: { data: Student[] };
    direction?: { data: Direction };
  };
}
export interface Group_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  group_name: string;
  degree_program: string;
  students: Student_Plain[];
  direction?: Direction_Plain;
}

export interface Group_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  group_name: string;
  degree_program: string;
  students: number[];
  direction?: number;
}

export interface Group_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  group_name: string;
  degree_program: string;
  students: AdminPanelRelationPropertyModification<Student_Plain>;
  direction?: AdminPanelRelationPropertyModification<Direction_Plain>;
}
