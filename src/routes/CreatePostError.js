import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Input, Radio, Alert } from 'antd';

const { TextArea } = Input;

function CreatePostError() {
  return (
    <div>
      <div style={{ borderStyle: 'solid', borderBottomWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderBottomColor: '#bababa'}}>
        <PageHeader 
            title="fELLowship"
            subTitle="New Post "
        />
      </div>   
      <Alert
      message="Abandon post?"
      type="error"
      action={
          <div>
          <Button size="small" type="ghost" style={{ marginRight: 5}}>
            <Link to="/Home" aria-label="yes">
            Yes
            </Link>
          </Button>
          <Button size="small" type="ghost" type="primary">
            <Link to="/Make_a_post" aria-label="no">
                No
            </Link>
        </Button>
        </div>
      }
      style={{ marginTop: 30, marginLeft: 10, width: '20%'}}
    />
      <div style={{ margin: 'auto', marginTop: 20, width: '75%', height: 500, borderColor: '#bababa', borderWidth: 1, borderStyle: 'solid' }}>
        <div style={{ margin: 'auto', marginTop: 15, display: 'flex', flexDirection: 'row'}}>
          <Input style={{width:'50%', marginRight: '21%', marginLeft: 15}} placeholder="title" aria-label="post title"/>
          <Radio.Group defaultValue="post" size="large" >
            <Radio.Button value="post" aria-label="post">Post</Radio.Button>
            <Radio.Button value="event" aria-label="event">Event</Radio.Button>
            <Radio.Button value="announcement" aria-label="announcement">Announcement</Radio.Button>
          </Radio.Group>
        </div>
        <div style={{ margin: 15}}>
          <TextArea aria-label="post content" placeholder="Aa" style={{ height: 370 }}/>
        </div>
        <div style={{ margin: 15, justifyContent: 'right' }}>
          <Button type="primary" style={{alignSelf: 'right'}}><Link to="/Home" aria-label="create post">Create Post</Link></Button>
        </div>
      </div>
    </div>
  );
}
export default CreatePostError;