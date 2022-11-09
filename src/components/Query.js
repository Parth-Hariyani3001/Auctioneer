import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Query.css";

function Query() {

    const[name,setName] = useState("");
    const[college,setCollege] = useState("");
    const[phone,setPhone] = useState("");
    const[query,setQuery] = useState("");


    const hName = (event) => {setName(event.target.value);}
    const hCollege = (event) => {setCollege(event.target.value);}
    const hPhone = (event) => {setPhone(event.target.value);}
    const hQuery = (event) => {setQuery(event.target.value);}

    const save = (event) => {
        event.preventDefault();
        let msg = name + " " + college + " " + phone + " " + query;
        let data = {"from_name":name,"from_college":college,"from_phone":phone,"message":query};
        emailjs.send("service_20jeti3","template_tzqia1j",data,"nYUlYat3fkzReLrKU")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        alert(msg);
        setName("");
        setCollege("");
        setPhone("");
        setQuery("");
    }

    return(
        <div className="body-style">     
                <h1 className="title-text">Enquiry Form</h1>
                <br/><br/>
                <form onSubmit={save}>
                    <b><label>Enter Your Name : </label></b>
                    <input type="text" placeholder="Enter Name" onChange={hName} className="input-text"/>
                    <br/><br/>
                    <b><label>Enter Product Name</label></b>
                    <input type="text" placeholder="Enter Product Name" onChange={hCollege} className="input-text"/>
                    <br/><br/>
                    <b><label>Enter Phone Number</label></b>
                    <input type="number" placeholder="Enter Phone Number" onChange={hPhone} className="input-text"/>
                    <br/><br/>
                    <b><label>Enter Your Query</label></b>
                    <textarea placeholder="Enter Query" rows={5} cols={22} onChange={hQuery} className="textarea-design"/>
                    <br/><br/>
                    <input type="submit" className="submit-button"/>
                </form>
        </div >
    );
}

export default Query;