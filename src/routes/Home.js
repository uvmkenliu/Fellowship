import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Input } from 'antd';
import { FormOutlined } from '@ant-design/icons';

const { Search } = Input;

const postOneTitle = `New Student Introduction. Hi!`;
const postOneContent = <div>
    <p>Hi everyone,</p>
    <p>I’m using Google translate, so I hope this comes out okay!</p>
    <p> I’m Nadia! My mother and I just moved here from Argentina. 
        Does anyone have recommendations for things to do on the weekend? It would also be very nice to have 
        someone who speaks Spanish and English I can ask questions to. I’m a little overwhelmed by my classes. 
        Let me know if you are interested in meeting? Thank you!</p>
    <p>I’m looking forward to meeting more of the people in my classes.</p>
    </div>;
const postTwoTitle = `Bilingual Origami Lessons!`;
const postTwoContent = <div>
    <p>Anyone around this Wednesday? We’re holding a bilingual origami lesson at 6pm.</p>
    <p>Come swing by classroom 228 to practice your origami, English, or Spanish. We’ll be taking request, so come with an animal in mind!</p>
    <p>Everyone’s welcome!</p>
</div>;
const postThreeTitle = `Academic Advising Appointments`;
const postThreeContent = <div>
    <p>Students,</p>
    <p>Starting this coming Monday, your academic advisor will 
        send you an email on scheduling a time to work with 
        you on your future academic plans. Juniors, your advisor will provide you
        helpful information on the college application process. Seniors, your 
        advisor will work closely with you to make sure your graduation is nice 
        and smooth. Do not hesitate to talk to your academic advisor if you have 
        any concerns!</p>
    <p>Have a wonderful weekend!</p>
</div>;

function Post(props) {
    return(
        <div style={{ borderStyle: 'solid', borderWidth: 1, borderColor: '#bababa', borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0}}>
            <div style={{ margin: 'auto', margin: 20, borderStyle: 'solid', borderWidth: 1, borderColor: '#bababa'}}>
                <h2 style={{margin: 10, paddingBottom: 5}} aria-label="post title">{props.title}</h2>
                <h5 aria-label="post type" style={{margin: 10, paddingBottom: 10, borderStyle: 'solid', borderBottomWidth: 1, borderColor: '#bababa', borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0}}>{props.postType}</h5>
                <p style={{margin: 10}} aria-label="post content">{props.postContent}</p>
            </div>
        </div>

    );
};

function Home() {
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
      <div style={{ margin: 'auto', marginTop: 10, width: '50%'}}>
          <Search placeholder="search" aria-label="search"/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', borderStyle: 'solid', width:'65%', marginTop: 10, borderWidth: 1, borderColor: '#bababa'}}>
            <Post title={postOneTitle} postContent={postOneContent} />
            <Post title={postTwoTitle} postContent={postTwoContent} postType="Event"/>
            <Post title={postThreeTitle} postContent={postThreeContent} postType="Announcement"/>
      </div> 
    </div>
  );
}
export default Home;