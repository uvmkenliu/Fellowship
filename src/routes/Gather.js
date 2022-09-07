import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const gatherDesc = `Gathers allow you to chat live with students at your school. The messages will only be saved
as long as you are all in the gather. You will not be able to chat with anyone if no one is online! Do you want to 
start a gather?`;

function Gather() {
  return (
    <div>
      <div style={{ borderStyle: 'solid', borderBottomWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderBottomColor: '#bababa'}}>
        <PageHeader 
            title="fELLowship"
            onBack={() => window.history.back()}
            subTitle="Home"
            extra={[
              <Button ><Link to="/Home" aria-label="home" >Home</Link></Button>,
              <Button ><Link to="/Find_a_friend" aria-label="find a friend">Find A Friend</Link></Button>,
              <Button ><Link to="/Gather" aria-label="gather">Gather</Link></Button>,
              <Button ><Link to="/Events" aria-label="events">Events</Link></Button>,
              <Button type="primary"><Link to="/Make_a_post" aria-label="make a post"><FormOutlined /></Link></Button>,
            ]}
        />
      </div>   
      <div style={{ margin: 'auto', marginTop: 15, width: '60%', borderWidth: 1, borderColor: '#bababa', height: 550}}>
        <div style={{ margin: 'auto', margin: 20, borderStyle: 'solid', borderWidth: 1, borderColor: '#bababa', height: 140}}>
            <h2 aria-label="title" style={{ margin: 15, textAlign: 'center' }}>Ready to gather?</h2>
            <p style={{ margin: 15, textAlign: 'center' }} aria-label="gather description">{gatherDesc}</p>
        </div>
        <Button type="primary" style={{ width: '30%', marginLeft:'35%' }}><Link to="/Gather_example" aria-label="start a gather">Start A Gather</Link></Button>
      </div>
    </div>
  );
}
export default Gather;