import {Grid, Form, Segment,Button,Message,Header,Image} from "semantic-ui-react"
import "./Login.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./Assets/logo.png";
function Login(){

    const [showSignUp,setShowSignUp] = useState(false);
    const [signInForm,setSignInForm] = useState({email:'',password:''});

    const signUpHandler =() =>{
            setShowSignUp(!showSignUp);
            setSignInForm({email:'',password:''});
    }

    return (
        <>
                        <Header style={{margin:'50px 10px 0'}} as='h2' color='teal' textAlign='center'>
                            <Image style={{width:"18vw",maxWidth:'150px'}} src={logo} />
                        </Header>
            <Grid  textAlign='center' className="page" verticalAlign='middle'>
                        
                    <Grid.Column className="pageColumn" >
                        
                        <div className={!showSignUp?"containerAnimationInLeft loginContainer":"loginContainer containerAnimationOutLeft"}>
                        
                        <Form size='large' >
                            <Segment stacked >
                            <Form.Input value={signInForm.email} onChange={(e)=>setSignInForm({...signInForm,email:e.currentTarget.value})} fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input
                                value={signInForm.password} 
                                onChange={(e)=>setSignInForm({...signInForm,password:e.currentTarget.value})}
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />

                            <Link to="Home"><Button color='teal' fluid size='large'>
                                Login
                            </Button></Link>
                            </Segment>
                        </Form>
                        <Message >
                            New User? <a style={{cursor:'pointer'}} onClick={signUpHandler}>Sign Up</a>
                        </Message>
                        </div>

                        <div style={{zIndex:'10',top:'-250px'}} className={showSignUp?"containerAnimationInRight loginContainer":"loginContainer containerAnimationOutRight"}>
                        
                        <Form size='large' >
                            <Segment stacked >
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                            <Form.Input fluid icon='edit' iconPosition='left' placeholder='First Name' />
                            <Form.Input fluid icon='edit' iconPosition='left' placeholder='Last Name' />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Confirm Password'
                                type='password'
                            />

                            <Button color='teal' fluid size='large'>
                                Sign Up
                            </Button>
                            </Segment>
                        </Form>
                        <Message >
                            Already Registered? <a style={{cursor:'pointer'}} onClick={signUpHandler}>Sign In</a>
                        </Message>
                        </div>
                        
                    </Grid.Column>

            </Grid>
        </>
    );
}

export default Login;