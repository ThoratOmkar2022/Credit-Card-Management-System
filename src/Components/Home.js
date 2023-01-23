import React, { useState } from "react";
import "antd/dist/reset.css";
import "./Css/component.css";
import { Breadcrumb, Layout, theme, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import girirajLogo from "../Assets/giriraj.png";
import { UserOutlined,DownOutlined } from "@ant-design/icons";
import { Avatar } from 'antd';
import NavPages from "./Navpages"

import {
  HomeOutlined,
  CreditCardOutlined,
  SwapOutlined,
  SettingFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className="head_slider">
        <h3 className="project_heading">Credit Card Management </h3>
        
        <Menu
          className="side_menu"
          theme="dark"
          defaultSelectedKeys={["/"]}
          onClick={({ key }) => {
            navigate(key)
          }}

          items={[
            { label: "Home", key: "/", icon: <HomeOutlined />, className: "menu_item" },
            {
              label: "Cards",
              key: "/Cards",
              icon: <CreditCardOutlined />,
              className: "menu_item",
              children: [
                { label: "Saved Cards", key: "./SavedCards" },
                { label: "GD Cards", key: "./GDCards" },
              ]
            },
            {
              label: "Transictions",
              key: "/Transictions",
              icon: <SwapOutlined />,
              className: "menu_item"
            },
            {
              label: "Settings",
              key: "/Settings",
              icon: <SettingFilled />,
              className: "menu_item"
            },
            { label: "Logout", key: "", icon: <LogoutOutlined />, className: "logout_menu_item" },
          ]}
        >
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            borderBottom: "1px solid gray",
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="header_logo">
            <div>{React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            
              <span className="logo_heading">Cards</span> </div>
            <div className="user_logout">
              <Avatar size={35} icon={<UserOutlined />} className="logout_logo"/> <DownOutlined />
            </div>
          </div>
        </Header>
        <Breadcrumb style={{ margin: '10px 10px' }}>
          <Breadcrumb.Item className="breadcrumb_item">Home</Breadcrumb.Item>
          <Breadcrumb.Item >Cards</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            margin: "15px 16px",
            border: "1px solid gray",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            overflowY: "scroll",
          }}
        >
          <NavPages />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2022  All Rights Reserve
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
