import { useState } from "react";
import {
  FieldInfoTypeForSend,
  FieldTypeForSend,
  FormTypeForSend,
  TableInfoTypeForSend,
} from "./types";

export const Form = () => {
  const fieldInfo: FieldInfoTypeForSend = {
    name: "",
    description: "",
    placeholder: "",
    help: "",
    hidden: false,
    optional: false,
  };
  const field: FieldTypeForSend = {
    name: "",
    description: "",
    placeholder: "",
    help: "",
    ad_tab_id: "",
    seq_no: "",
    field_info: fieldInfo,
    key: "",
    data_type: { data_type: "" },
    display_grid: false,
    order_by: false,
    query_criteria: false,
    query_mandatory: false,
  };

  const tabInfoInitialState: TableInfoTypeForSend = {
    name: "",
    description: "",
    placeholder: "",
    level: "",
    form_fields: [field],
    data_struct: {
      name: "",
    },
    active: false,
    grid: false,
  };

  const formInitialState: FormTypeForSend = {
    name: "",
    description: "",
    placeholder: "",
    help: "",
    request_type: "",
    is_active: false,
    tab_info: [tabInfoInitialState],
  };

  const [formState, setForm] = useState(formInitialState);
  const [tabInfoState, setTabInfo] = useState(tabInfoInitialState);
  const [fieldState, setField] = useState(field);
  const [fieldInfoState, setFieldInfo] = useState(fieldInfo);

  return (
    <form>
      <input name={formInitialState.name}></input>
      <input name={tabInfoInitialState.name}></input>
      <input></input>
      <input></input>
    </form>
  );
};
