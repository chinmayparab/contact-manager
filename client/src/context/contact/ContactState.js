import React, { useReducer } from "react";
import uuid from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Harry Puttar",
        email: "harry@g.c",
        phone: "28282-28282",
        type: "Professional",
      },
      {
        id: 2,
        name: "Starry Night",
        email: "vaughn@g.c",
        phone: "1111-22982",
        type: "Personal",
      },
      {
        id: 3,
        name: "Clash Thompson",
        email: "crash@g.c",
        phone: "463463-2727",
        type: "Professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //  Add contact

  //  Delete contact

  // Set Current COntact

  // Clear Current Contact

  // Update COntact

  // Filter COntacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
