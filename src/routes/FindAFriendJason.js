import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button } from 'antd';
import { FormOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const bio = `i've lived in Somerville my whole life and just learned we had an 
ELL program at the school. i'm super interested in learning about different cultures
(especially latin american ones). mom said were gonna go to mexico when i graduate
 it'd be fun to brush up on some of my Spanish. hmu if you wanna chat 617-663-8234.`;

function FindAFriendJason() {
  return (
    <div>
      <div style={{ borderStyle: 'solid', borderBottomWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderBottomColor: '#bababa'}}>
        <PageHeader 
            title="fELLowship"
            onBack={() => window.history.back()}
            subTitle="Find A Friend"
            extra={[
              <Button ><Link to="/Home" aria-label="home" >Home</Link></Button>,
              <Button ><Link to="/Find_a_friend" aria-label="find a friend">Find A Friend</Link></Button>,
              <Button ><Link to="/Gather" aria-label="gather">Gather</Link></Button>,
              <Button ><Link to="/Events" aria-label="events">Events</Link></Button>,
              <Button type="primary"><Link to="/Make_a_post" aria-label="make a post"><FormOutlined /></Link></Button>,
            ]}
        />
      </div>   

      <div style={{ justifyContent: 'center', margin: 'auto', borderStyle: 'solid', width:'50%', marginTop: 15, borderWidth: 1, borderColor: '#bababa'}}>
        <div style={{ margin: 15 }}>
          <h2 aria-label="name of student" style={{ borderStyle: 'solid', borderWidth: 1, borderBottomColor: '#bababa', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0 }}>Jason Dupont</h2>
          <h3 aria-label="grade of student">Grade: 12</h3>
          <h3 aria-label="languages student speaks">Language(s) spoken: English, passable French, a little Spanish</h3>
          <h3 aria-label="student fun fact">Fun fact: Golf is life</h3>
          <p aria-label="student bio" style={{ borderStyle: 'solid', borderWidth: 1, borderBottomColor: '#bababa', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, paddingBottom: 10 }}>{bio}</p>
          <h3>Reach out if you're interested in joining the golf team! We're recruiting!</h3>
          <div style={{margin: 'auto'}}>
            <Button type="primary" aria-label="contact" style={{ width: '30%', marginLeft: '35%', marginTop: 10 }}>Contact Jason</Button>
          </div>
        </div>
      </div> 
      
      <div style={{ justifyContent: 'center', margin: 'auto', width:'50%', marginTop: 15 }}>
          <Button style={{width:'50%'}}><Link to="/Find_a_friend" aria-label="previous student"><ArrowLeftOutlined /></Link></Button>
          <Button style={{width:'50%'}}><Link to="/Find_a_friend_Danny" aria-label="next student"><ArrowRightOutlined /></Link></Button>
      </div>
    </div>
  );
}
export default FindAFriendJason;