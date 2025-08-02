import React,{ useState } from "react"
import { Form, FormGroup, Input, Label,Button } from "reactstrap"

function Login(){
    const [form,setForm]=useState({
        email:"",
        password:"",
        terms:false,
    });
    function handleChange(event){
        let {type,name,value,checked}=event.target;
        value= type==="checkbox" ? checked : value;
        setForm({...form, [name]:value});

    }
    return(
        <Form>
            <FormGroup>
                <Label for="formEmail">Email:</Label>
                <Input
                type="email"
                id="formEmail"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                 />
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
                 />
            </FormGroup>
            <FormGroup check>
                <Input
                type="checkbox"
                name="terms"
                id="terms"
                checked={form.terms}
                onChange={handleChange}/>
                <Label htmlFor="terms">I agree to terms of service and privacy policy</Label>
            </FormGroup>
            <FormGroup className="text-center p-4">
                <Button disabled={!form.terms} color="primary">Sign In</Button>
            </FormGroup>
            
        </Form>
    )
}
export default Login