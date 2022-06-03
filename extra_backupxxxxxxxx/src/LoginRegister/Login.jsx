import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const data = {
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
    const res = await axios.post(
      "https://cloneuser.herokuapp.com/login",
      formdata
    );
    //const data = await res.send();
    if (res.status == 201) {
      console.log("login success...");
      alert("login successgul");
      navigate("/");
    } else {
      console.log(res.data.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handlesubmit}>
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
          <input type="submit" value="Signin" />
        </form>
      </div>
    </div>
  );
};
