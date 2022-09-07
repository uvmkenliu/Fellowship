import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from 'antd';

function Login() {
  
  const about = "In middle and high school, English language learners (ELLs, formerly ESLs) are oftentimes isolated (culturally, linguistically, and oftentimes physically) from their native English speaking peers; they need a way to communicate and connect with their native English-speaking peers in order to speak English outside of the classroom and connect with the larger school (and local) community. fELLowship, is just that.";

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '50%', textAlign: 'center', paddingTop: '5%'}}>
        <h1 aria-label="fellowship" style={{ fontSize: 40 }}>Welcome to fELLowship</h1>
        <p aria-label="about fellowship">{about}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '30%', marginTop: 20 }}>
        <Input type="text" placeholder="email" aria-label="email" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}/>
        <Input.Password placeholder="password" aria-label="password" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }} />
        <Button type="primary" color="blue" style={{ marginBotton: 30 }}><Link to="/Home" aria-label="log in">Log in</Link></Button>
        <div style={{marginBottom: 10}}></div>
        <Button style={{}}><Link to="/Signup" aria-label="sign up">Sign Up</Link></Button>
      </div>
      

    </div>
  );
}

export default Login;

