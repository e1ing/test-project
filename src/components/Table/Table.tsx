import React from 'react';


export type TableColumn = {
   header: string;
   accessor: string; // это ключ для доступа к данным из объекта
 };
 
 export type TableProps<T> = {
   columns: TableColumn[];
   data: T[];
 };

