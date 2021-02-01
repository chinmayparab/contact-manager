import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
import jwtDecode from "jsonwebtoken/decode";

import Sticky from "react-stickynode";

const Home = () => {
  const authContext = useContext(AuthContext);

  const localAuthToken = localStorage.getItem("authToken");
  const ease = jwtDecode(localAuthToken);
  console.log(ease);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <Sticky enabled={true} top={80}>
        <ContactForm />
      </Sticky>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
