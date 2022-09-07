import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Input } from 'antd';

export default function Signup() {
  return (
    <div>
      <div>
        <PageHeader 
            title="fELLowship"
            onBack={() => window.history.back()}
            subTitle="Sign Up"
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: 'auto', width: '30%', textAlign: 'center', paddingTop: '5%' }}>
        <Input type="text" placeholder="email" aria-label="email" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}/>
        <Input.Password placeholder="password" aria-label="email" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}/>
        <select aria-label="school name" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}>
          <option value="Select Your School">Select Your School</option>
          <option value="Burlington High School">Burlington High School</option>
          <option value="South Burlington High School">South Burlington High School</option>
          <option value="Champlain Valley Union">Champlain Valley Union</option>
        </select>
        <select aria-label="grade level" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}>
          <option value="Grade Level">Grade Level</option>
          <option value="9th">9th</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
        <select aria-label="school role" style={{ marginBottom: 10, borderColor: '#bababa', borderWidth: 1, paddingTop: 3, paddingBottom: 3, paddingLeft: 3 }}>
          <option value="I am...">I am...</option>
          <option value="an ELL">an ELL</option>
          <option value="a native English speaker">a native English speaker</option>
          <option value="a teacher or admin">a teacher or admin</option>
        </select>
        <Button type="primary"><Link to="/Home" aria-label="create account">Create Account</Link></Button>
      </div>

    </div>
  );
}