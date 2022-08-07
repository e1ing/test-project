import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import { Card } from 'react-bootstrap'

function App() {

  const [state, setState] = useState({
    date: new Date(),
  })


  const handleOnChange = (date) => {
    setState(date)
  }

  return (
    <div style={{ textAlign: 'left', marginLeft: '20px', marginTop: '20px' }}>
      <Calendar
        label='Календарь'
        name='calendar'
        value={state.calendar}
        selected={state.date}
        onChange={handleOnChange}
      />
      <Card body style={{ marginTop: "50px" }}>
        This is some text within a card body.
      </Card>
    </div>
  );
}

export default App;
