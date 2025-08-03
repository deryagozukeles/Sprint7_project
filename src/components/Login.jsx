import React,{ useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Label,Button, FormFeedback } from "reactstrap"
const errorMessages={
    email:"Please enter a valid email address",
    password:"Password must be at least 8 characters, contain uppercase letters, lowercase letters, numbers and special characters!"
}
function Login(){
    const [form,setForm]=useState({
        email:"",
        password:"",
        terms:false,
    });
    const [isValid,setIsValid]=useState(false);
    const [errors,setErrors]=useState({
        email:false,
        password:false,
        terms:false
    });
    const history=useHistory();
    const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validatePassword = (password) => {
 const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  return passwordRegex.test(password);
};
    function handleChange(event){
        let {type,name,value,checked}=event.target;
        value= type==="checkbox" ? checked : value;
        setForm({...form, [name]:value});
        if(name==="email"){
            if(validateEmail(value)){
                setErrors({...errors,[name]:false});
            }else{
                setErrors({...errors,[name]:true});
            }
        }
        if(name==="password"){
            if(validatePassword(value)){
                setErrors({...errors,[name]:false});
            }else{
                setErrors({...errors,[name]:true});
            }
            }
        if(name==="terms"){
            if(value){
                setErrors({...errors,[name]:false});
            }else{
                setErrors({...errors,[name]:true});
            }
            }
        }
        useEffect(()=>{
            if(validateEmail(form.email) && validatePassword(form.password) && form.terms){
                setIsValid(true);
            }else{
                setIsValid(false);
            }
        },[form])
const handleSubmit=(event)=>{
    event.preventDefault();
   if (isValid) {
  history.push("/success");
}
}
        

    
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="formEmail">Email:</Label>
                <Input
                type="email"
                id="formEmail"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                invalid={errors.email}
                data-testid="email-error"/>
                 {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label for="password">Password:</Label>
                <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                invalid={errors.password}
                 data-testid="password-error"/>
                 {errors.password && <FormFeedback>{errorMessages.password}</FormFeedback>}
            </FormGroup>
            <FormGroup check>
                <Input
                type="checkbox"
                name="terms"
                id="terms"
                checked={form.terms}
                onChange={handleChange}
                invalid={errors.terms}/>
                <Label for="terms">I agree to terms of service and privacy policy</Label>
            </FormGroup>
            <FormGroup className="text-center p-4">
                <Button disabled={!isValid} color="primary" type="submit">Sign In</Button>
            </FormGroup>
            
        </Form>
    )
}
export default Login