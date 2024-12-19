export interface FormType {
  id?: number;
  uid?: string;
  name: string;
  description: string;
  placeholder: string;
  help: string;
  request_type: string;
  is_active: boolean;
  tab_info: Array<TableInfo>;
}

export interface TableInfo {
  id?: string;
  name: string;
  description: string;
  placeholder: string;
  level: string;
  form_fields: Array<Field>;
  data_struct: {
    name: string;
  };
  active: boolean;
  grid: boolean;
}

export interface Field {
  id?: number;
  uid?: string;
  name: string;
  description: string;
  placeholder: string;
  help: string;
  ad_tab_id: string;
  seq_no: string;
  field_info: FieldInfo;
  key: string;
  data_type: { data_type: string };
  display_grid: boolean;
  order_by: boolean;
  query_criteria: boolean;
  query_mandatory: boolean;
}

export interface FieldInfo {
  id?: number;
  uid?: string;
  name: string;
  description: string;
  placeholder: string;
  help: string;
  hidden: boolean;
  optional: boolean;
}

export type FormTypeForSend = Omit<FormType, "id" | "uid">;
export type TableInfoTypeForSend = Omit<TableInfo, "id">;
export type FieldTypeForSend = Omit<Field, "id" | "uid">;
export type FieldInfoTypeForSend = Omit<FieldInfo, "id" | "uid">;
