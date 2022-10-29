import { useState } from "react";
import emailjs from "@emailjs/browser";

function Enquiry() {

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
        <>
            <center>
                <h1>Fill the form</h1>
                <form onSubmit={save}>
                    <input type="text" placeholder="Enter Name" onChange={hName}/>
                    <br/><br/>
                    <input type="text" placeholder="Enter Product Name" onChange={hCollege} />
                    <br/><br/>
                    <input type="number" placeholder="Enter Phone Number" onChange={hPhone} />
                    <br/><br/>
                    <textarea placeholder="Enter Query" rows={5} cols={22} onChange={hQuery} />
                    <br/><br/>
                    <input type="submit" />
                </form>
            </center>
        </>
    );
}

export default Enquiry;