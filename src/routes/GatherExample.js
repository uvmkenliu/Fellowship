import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Input } from 'antd';
import { FormOutlined, SendOutlined } from '@ant-design/icons';

function GatherExample() {
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
      <div style={{ margin: 'auto', marginTop: 15, width: '60%', borderStyle: 'solid', borderWidth: 1, borderColor: '#bababa', height: 550}}>
        <div style={{ margin: 'auto', margin: 20, borderStyle: 'solid', borderWidth: 1, borderColor: '#bababa', height: 460}}>
            <div style={{ margin: 10, padding: 5, borderStyle: 'solid', borderBottomWidth: 1, borderColor: '#bababa', borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, backgroundColor:'#facdf7' }}>
              <h3>Danny</h3>
              <p>sup?</p>
            </div>

            <div style={{ margin: 10, padding: 5, borderStyle: 'solid', borderBottomWidth: 1, borderColor: '#bababa', borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, backgroundColor:'#d5d9f7' }}>
              <h3>Nadia</h3>
              <p>HI!</p>
              <p>nmu?</p>
            </div>

            <div style={{ margin: 10, padding: 5, borderStyle: 'solid', borderBottomWidth: 1, borderColor: '#bababa', borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}>
              <h3>You</h3>
              <p>how're y'all doing?</p>
            </div>

        </div>
        <div style={{ display: 'flex', flexDirection: 'row', margin: 20}}>
          <Input placeholder="Aa" style={{ width: '90%'}}/>
          <Button type="primary" style={{ width: '10%' }} icon={<SendOutlined />}></Button>
        </div>
          
      </div>
    </div>
  );
}
export default GatherExample;