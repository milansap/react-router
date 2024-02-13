import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

import "./contact.css";
import { Button, TextField } from "@mui/material";
function Contact() {
  function submit(e) {
    e.preventDefault();
    console.log(formData);
    if (!formData.name) {
      setFormError((e) => {
        return { ...e, nameError: "The name is required*" };
      });
    }
    if (!formData.address) {
      setFormError((e) => {
        return { ...e, addressError: "The address is required*" };
      });
    }
    if (!formData.password) {
      setFormError((e) => {
        return { ...e, passwordError: "The passsword is required*" };
      });
    }
    if (!formData.number) {
      setFormError((e) => {
        return { ...e, numberError: "The number is required*" };
      });
    }
    if (!formData.gender) {
      setFormError((e) => {
        return { ...e, genderError: "select your gender!*" };
      });
    }
    if (!formData.country) {
      setFormError((e) => {
        return { ...e, countryError: "Select your country*" };
      });
    }
    if (!formData.course) {
      setFormError((e) => {
        return { ...e, courseError: "Select your course*" };
      });
    }
  }
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    password: "",
    number: null,
    gender: "",
    country: "",
    course: "",
    text: "",
    ReactJs: false,
    Python: false,
    Java: false,
    NodeJs: false,
    Laravel: false,
  });
  const [formError, setFormError] = useState({
    nameError: "",
    addressError: "",
    passwordError: "",
    numberError: "",
    genderError: "",
    countryError: "",
    courseError: "",
  });

  // console.log(name);
  // console.log(gender);
  // console.log(password);
  // console.log(address);
  // console.log(country);
  // console.log(course);
  // console.log(text);
  return (
    <div className="contact">
      <div className="icons">
        <div className="div1">
          <div className="address">
            <IoLocationSharp size={40} color="rgba(39, 139, 233, 0.836)" />
            <h3>Our Main Office</h3>
            <h5>Banepa,Kavre</h5>
          </div>
          <div className="phone">
            <BsFillTelephoneFill size={40} color="rgba(39, 139, 233, 0.836)" />
            <h3>Phone</h3>
            <h4>+977 9865585461</h4>
          </div>
        </div>
        <div className="div2">
          <div className="email">
            <MdMarkEmailUnread size={40} color="rgba(39, 139, 233, 0.836)" />
            <h3>E-mail</h3>
            <h6>info.itbridge@gmail.com</h6>
          </div>
          <div className="fax">
            <RiWhatsappFill size={40} color="rgba(39, 139, 233, 0.836)" />
            <h3>whatsApp</h3>
            <h5>+977 9845046048</h5>
          </div>
        </div>
      </div>

      <div className="form">
        <h1>
          Get in <span>touch</span>{" "}
        </h1>
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <form>
          <TextField
            label="Name"
            variant="standard"
            size="small"
            value={formData.name}
            type="text"
            placeholder="Enter your Name.."
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
            style={{ width: "100%", height: "30px", borderRadius: "10px" }}
          />
          <br />
          <span className="error-msg">{formError.nameError}</span>
          <br />
          <TextField
            label="Address"
            variant="standard"
            size="small"
            style={{ width: "100%", height: "30px", borderRadius: "10px" }}
            type="text"
            value={formData.address}
            placeholder="Enter your address.."
            onChange={(e) => {
              setFormData({ ...formData, address: e.target.value });
            }}
          />
          <br />
          <span className="error-msg">{formError.addressError}</span>
          <br />

          <TextField
            label="Number"
            variant="standard"
            size="small"
            style={{ width: "100%", height: "30px", borderRadius: "10px" }}
            placeholder="for e.g.+977 98*********"
            value={formData.number}
            onChange={(e) => {
              setFormData({ ...formData, number: e.target.value });
            }}
            type="number"
          />
          <br />
          <span className="error-msg">{formError.numberError}</span>
          <br />
          <div>
            <label>Gender:</label>
            <input
              name="gender"
              value={"male"}
              type="radio"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            <label>Male</label>
            &nbsp;
            <input
              name="gender"
              value={"female"}
              type="radio"
              onChange={(e) => {
                setFormData({ ...formData, gender: e.target.value });
              }}
            />
            <label>Female</label>
            <br />
            <span className="error-msg">{formError.genderError}</span>
          </div>
          <br />
          <div>
            <label>Select Courses:</label>
            <input
              type="checkbox"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, ReactJs: e.target.checked });
              }}
            />
            <label>ReactJs</label>
            &nbsp;
            <input
              type="checkbox"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, Python: e.target.checked });
              }}
            />
            <label>Python</label>
            &nbsp;
            <input
              type="checkbox"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, Java: e.target.checked });
              }}
            />
            <label>Java</label>
            &nbsp;
            <input
              type="checkbox"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, nodeJs: e.target.checked });
              }}
            />
            <label>NodeJs</label>
            &nbsp;
            <input
              type="checkbox"
              value={formData.course}
              onChange={(e) => {
                setFormData({ ...formData, Laravel: e.target.checked });
              }}
            />
            <label>Laravel</label>
            &nbsp;
          </div>
          <br />
          <span className="error-msg">{formError.courseError}</span>
          <div>
            <label>Select Country:</label>
            <select
              onChange={(e) => {
                setFormData({ ...formData, country: e.target.value });
              }}
            >
              <option value="">--Select Country--</option>
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
              <option value="china">China</option>
              <option value="usa">USA</option>
              <option value="india">Austrila</option>
            </select>
          </div>
          <span className="error-msg">{formError.countryError}</span>
          <br />
          <input
            style={{ width: "100%", height: "80px", borderRadius: "10px" }}
            type="textarea"
            value={formData.text}
            placeholder="feedback...."
            onChange={(e) => {
              setFormData({ ...formData, text: e.target.value });
            }}
          />

          <br />
          <br />
          <Button
            color="success"
            className="sub-btn"
            onClick={submit}
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
