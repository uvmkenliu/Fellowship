import React from 'react';
import { render } from "react-dom";
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
//user React Router for naviagation. https://v5.reactrouter.com/web/guides/quick-start
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Home from "./routes/Home";
import CreatePost from "./routes/CreatePost";
import CreatePostError from './routes/CreatePostError';
import FindAFriendNadia from './routes/FindAFriendNadia';
import FindAFriendJason from './routes/FindAFriendJason';
import FindAFriendDanny from './routes/FindAFriendDanny';
import Gather from './routes/Gather';
import GatherExample from './routes/GatherExample';
import Events from "./routes/Events";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Make_a_post" element={<CreatePost />} />
      <Route path="/Make_a_post_error" element={<CreatePostError />} />
      <Route path="/Find_a_friend" element={<FindAFriendNadia />} />
      <Route path="/Find_a_friend_jason" element={<FindAFriendJason />} />
      <Route path="/Find_a_friend_danny" element={<FindAFriendDanny />} />
      <Route path="/Gather" element={<Gather />} />
      <Route path="/Gather_example" element={<GatherExample />} />
      <Route path="/Events" element={<Events />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
