import React from 'react';
import {Link} from 'dva/router';
import { Layout, Menu, Icon } from 'antd';


const { Header ,Sider, Content } = Layout;

function Header1({state,location}){
    return (
    	  
	          <Header style={{ background: '#fff', padding: 0 }}>
		           <Menu selecteKeys={location.pathname} mode="horizontal" theme="dark">
		            <Menu.Item key="/users" >
		                <Link to="/users" ><Icon type="bars" />Users</Link>
		            </Menu.Item>
		             <Menu.Item key="/" >
		                <Link to="/" ><Icon type="home" />Home</Link>
		            </Menu.Item>
		             <Menu.Item key="/404" >
		                <Link to="/page-you-dont-know" ><Icon type="frown-circle" />404</Link>
		            </Menu.Item>
		            <Menu.Item key="/antd" >
		               <a href="https://github.com/dvajs/dva" target="_blank">dva</a>
		            </Menu.Item>
		            <Menu.Item key="/main" >
		                <Link to="/main" ><Icon type="frown-circle" />main</Link>
		            </Menu.Item>
		        </Menu>
		        
	          </Header>
	        
    );
}

export default Header1;