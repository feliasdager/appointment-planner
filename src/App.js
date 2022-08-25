import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";



import './App.css';
import AppointmentPage from "./containers/appointmentsPage/AppointmentPage";
import { ContactsPage } from "./containers/appointmentsPage/contactsPage/ContactsPage";

function App() { 

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  };

  const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };


  return (
    <div className="App">
        <ContactsPage contacts={contacts} addContact={addContact} /> 
        <AppointmentPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />

    </div>
  );
}

export default App;
