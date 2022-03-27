import React, { useState } from "react";
import "../../../style/contact.css";

const initialState={
  name: "",
  nameError: false,
  contact: "",
  email: "",
  emailError: false,
  emailError2: false,
  message: "",
  messageError: false,
  formValid: false,
}

const Contact = () => {
  //#region state
  const [state, setState] = useState(initialState);
  //#endregion

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  //#region Event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const {
    name,
    email,
    message,
    nameError,
    contact,
    emailError,
    emailError2,
    messageError,
    formValid,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ nameError: name ? false : true, messageError: message ? false : true, emailError: email ? false : true  });
    // setState({ messageError: message ? false : true });
    // setState({ emailError: email ? false : true });
    if (email && !emailError) { setState({ emailError2: isValidEmail(email) ? false : true }); }
    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !emailError2 &&
      !messageError
    ) {
      setState({ formValid: true });
    } else {
      setState({ formValid: false });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setState({ [name]: value });

    if (value.length <= 0 && name === "name") {
      setState({ nameError: true });
    } else {
      setState({ nameError: false });
    }

    if (value.length <= 0 && name === "email") {
      setState({ emailError: true });
      setState({ emailError2: false });
    } else {
      setState({ emailError: false });
      if (isValidEmail(value)) {
        setState({ emailError2: false });
      } else {
        setState({ emailError2: true });
      }
    }
  };
  //#endregion

  if (!formValid) {
    return (
      <>
        <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
          <div className="card-header bg-transparent border-0 text-center text-uppercase">
            Contact Form
          </div>
          <div className="card-body">
            <form
              action="/"
              encType="multipart/form-data"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div className="form-group mt-3">
                <label className="mb-0 text-left">
                  Your name<span className="text-danger">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
                {nameError ? (
                  <div className="alert alert-danger mt-2">
                    Name is a required field.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mt-3">
                <label className="mb-0">
                  Your email<span className="text-danger">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
                {emailError ? (
                  <div className="alert alert-danger mt-2">
                    Email is a required field.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group mt-3">
                <label className="mb-0">Your contact number (Optional)</label>
                <input
                  name="contact"
                  type="text"
                  className="form-control"
                  placeholder="Contact"
                  value={contact}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
              </div>
              <div className="form-group mt-3">
                <label className="mb-0">
                  Message<span className="text-danger">*</span>
                </label>
                <textarea
                  name="message"
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => handleChange(e)}
                  onBlur={handleBlur}
                />
                {messageError ? (
                  <div className="alert alert-danger mt-2">
                    Message is a required field.
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className="text-center mb-0 mt-3">
                <input
                  type="submit"
                  className="btn btn-primary btn-lg w-100 text-uppercase"
                  value="Submit Now"
                />
              </p>
            </form>
          </div>
        </div>
      </>
    );
  }else {
    return (
      <div className="thankyou_details">
        <div className="alert alert-success mt-3">Mail sent successfully.</div>
      </div>
     )
   }
};

export default Contact;
