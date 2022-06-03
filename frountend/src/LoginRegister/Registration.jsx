import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [formdata, setFormdata] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);
    setFormdata({ ...formdata, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("data", formdata);
    await axios.post("https://cloneuser.herokuapp.com/register", formdata);
    alert("registration successfully");
    navigate("/login");
  
  };

  return (
    <div>
      <div>
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder="enter name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="enter email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="enter password"
            name="password"
            onChange={handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};
