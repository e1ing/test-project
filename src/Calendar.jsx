import React, { useState, forwardRef } from 'react';
import './App.css';
import DatePicker from "react-datepicker";
import { Form, InputGroup, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ ...props }) {

   const [dateState, setDateState] = useState(props.date);
   const [inputState, setInputState] = useState(props.date);

   const CustomInput = forwardRef(({ value, onClick }, ref) => (
      <Button className="custom-input"
         onClick={onClick}
         ref={ref}>
         {value}
      </Button>
   ));

   const handleChangeInput = (data) => {
      setDateState(data)
      setInputState(data)
   }


   return (
      <Form.Group >
         <Form.Label>{'some text'}</Form.Label>
         <InputGroup>

            <Form.Control
               onChange={handleChangeInput}
               value={inputState}
            />

            <DatePicker
               selected={dateState}
               onChange={handleChangeInput}
               customInput={<CustomInput />}
            />

         </InputGroup>
      </Form.Group>
   );
}
