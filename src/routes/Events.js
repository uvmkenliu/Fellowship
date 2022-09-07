import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button, Calendar, Badge } from 'antd';
import { FormOutlined } from '@ant-design/icons';

//used Calendar component from ant-design. Specifically, the tutorial here https://codesandbox.io/s/nl4ze?file=/index.js:153-1698 
function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '8:30 - CS 228' }
      ];
      break;
    case 10:
      listData = [
        { type: 'success', content: '1:10 - CS Fair' }
      ];
      break;
    default:
  }
  return listData || [];
}

//from same tutorial
function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: 0}}>
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content}/>
        </li>
      ))}
    </ul>
  );
}

function Events() {
  return (
    <div>
      <div style={{ borderStyle: 'solid', borderBottomWidth: 1, borderTopWidth: 0, borderRightWidth: 0, borderLeftWidth: 0, borderBottomColor: '#bababa'}}>
        <PageHeader 
            title="fELLowship"
            onBack={() => window.history.back()}
            subTitle="Events"
            extra={[
              <Button ><Link to="/Home" aria-label="home" >Home</Link></Button>,
              <Button ><Link to="/Find_a_friend" aria-label="find a friend">Find A Friend</Link></Button>,
              <Button ><Link to="/Gather" aria-label="gather">Gather</Link></Button>,
              <Button ><Link to="/Events" aria-label="events">Events</Link></Button>,
              <Button type="primary"><Link to="/Make_a_post" aria-label="make a post"><FormOutlined /></Link></Button>,
            ]}
        />
      </div>   
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto', borderStyle: 'solid', width:'75%', marginTop: 10, borderWidth: 1, borderColor: '#bababa'}}>
        <Calendar dateCellRender={dateCellRender} />
      </div> 
    </div>
  );
}
export default Events;