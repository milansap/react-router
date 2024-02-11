import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import "./contact.css";
function Contact() {
  function submit(e) {
    e.preventDefault();
    console.log(
      `name:${name},address:${address},password:${password},gender:${gender},country:${country},course:${course},text:${text} `
    );
    if (!name) {
      setNameError("******please!🙄******");
    } else setNameError("");
    if (!address) {
      setAddressError("******please!🙄******");
    } else setAddressError("");
    if (!password) {
      setPasswordError("******please!🙄******");
    } else setPasswordError("");
    if (!number) {
      setNumberError("******please!🙄******");
    } else setNumberError("");
    if (!gender) {
      setGenderError("******please!🙄****** ");
    } else setGenderError("");
    if (!country) {
      setCountryError("******please!🙄******");
    } else setCountryError("");
    if (!course) {
      setCourseError("******please!🙄******");
    } else setCourseError("");
  }
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState(false);
  const [country, setCountry] = useState("");
  const [course, setCourse] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [courseError, setCourseError] = useState("");

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
            <IoLocationSharp
              color="rgba(39, 139, 233, 0.836);"
              width={"50px"}
              height={"50px"}
            />
            <h3>Our Main Office</h3>
            <h5>Banepa,Kavre</h5>
          </div>
          <div className="phone"></div>
        </div>
        <div className="div2">
          <div className="email"></div>
          <div className="fax"></div>
        </div>

        <div className="form">
          <h1>---Get in touch--- </h1>
          <form>
            <input
              type="text"
              placeholder="Enter your Name.."
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ width: "100%", height: "30px", borderRadius: "10px" }}
            />

            <br />

            <span className="error-msg">{nameError}</span>
            <br />

            <input
              style={{ width: "100%", height: "30px", borderRadius: "10px" }}
              type="text"
              placeholder="Enter your address.."
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <br />
            <span className="error-msg">{addressError}</span>
            <br />

            <input
              style={{ width: "100%", height: "30px", borderRadius: "10px" }}
              placeholder="Enter your Password.."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />

            <br />
            <span className="error-msg">{passwordError}</span>
            <br />
            <input
              style={{ width: "100%", height: "30px", borderRadius: "10px" }}
              placeholder="for e.g.+977 98*********"
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              type="number"
            />
            <br />
            <span className="error-msg">{numberError}</span>
            <br />
            <div>
              <label>Gender:</label>
              <label>Male</label>
              <input
                name="gender"
                value={"male"}
                type="radio"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>Female</label>
              <input
                name="gender"
                value={"female"}
                type="radio"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <br />
              <span className="error-msg">{genderError}</span>
            </div>
            <br />
            <div>
              <label>Select Courses:</label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
              <label>ReactJs</label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
              <label>Python</label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
              <label>Java</label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
              <label>NodeJs</label>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
              <label>Laravel</label>
            </div>
            <br />
            <span className="error-msg">{courseError}</span>
            <div>
              <label>Select Country:</label>
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
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
            <span className="error-msg">{countryError}</span>
            <br />
            <input
              style={{ width: "100%", height: "80px", borderRadius: "10px" }}
              type="textarea"
              placeholder="feedback...."
              onChange={(e) => {
                setText(e.target.value);
              }}
            />

            <br />
            <br />
            <button className="sub-btn" onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
