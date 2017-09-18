import React from 'react';
import {Link} from 'dva/router';
import {Avatar, Badge,Dropdown, Button, Layout, Menu, Icon } from 'antd';

const { Header ,Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

 const menu = (
  <Menu>
    <Menu.Item>
      <a target="_self" rel="noopener noreferrer" href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">3d menu item</a>
    </Menu.Item>
  </Menu>
);



  
function Header1({state,location,children}){
    return (
    	
    	  <Layout>
	        <Sider
	          trigger={null}
	          collapsible
	        >
	          <div className="logo" />
	          	<div style={{margin:'24px 16px',textAlign: 'center' }}>
	           		<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
	           		<span style={{color:'gray',lineHeight:'32px',display:'inline-block',height: '32px', width: '75px', overflow:' hidden'}}>DVA ADMIN</span>
	          	</div>
	          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
	            <Menu.Item key="1">
	              <Link to="/dashboard" >
		                    <Icon type="bars" />管理平台
		                </Link>
	            </Menu.Item>
	           
	           <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
		          	<Menu.Item key="2">
	              		<Link to="/users" >管理员</Link>
	            	</Menu.Item>
		          <Menu.Item key="21">管理员角色</Menu.Item>
		          <Menu.Item key="22">用户</Menu.Item>
		          <Menu.Item key="23">
		             <Link to="/error404" >error404</Link>
		            </Menu.Item>
		        </SubMenu>
          
	            <Menu.Item key="3">
	             <Link to="/main" >
		                    <Icon type="bars" />main
		                </Link>
	            </Menu.Item>
	              <Menu.Item key="4">
	             <Link to="/error404" >
		                    <Icon type="bars" />error404
		                </Link>
	            </Menu.Item>
	              <Menu.Item key="5">
	             <Link to="/error500" >
		                    <Icon type="bars" />error500
		                </Link>
	            </Menu.Item>
	             
	             <Menu.Item key="6">
	             <Link to="/main" >
		                    <Icon type="bars" />系统管理
		                </Link>
	            </Menu.Item>
	            <Menu.Item key="7">
	             <Link to="/main" >
		                    <Icon type="bars" />前端分页
		                </Link>
	            </Menu.Item>
	            <Menu.Item key="8">
	             <Link to="/main" >
		                    <Icon type="bars" />测试导航
		                </Link>
	            </Menu.Item>
	            <Menu.Item key="9">
	             <Link to="/main" >
		                    <Icon type="bars" />UI组件
		                </Link>
	            </Menu.Item>
	          </Menu>
	        </Sider>
	    	 <Layout>
	        <Header style={{background:'#fff'}}>
		        <Icon  className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}  onClick={this.toggle}  />
	        	<div style={{float:'right'}}>
	        		<Icon type="message" style={{ fontSize: 16, color: '#08c' , margin:'24px 12px'}} />
	        		<Icon type="mail" style={{ fontSize: 16, color: '#08c' , margin:'24px 12px'}} />
	        		<Icon type="notification" style={{ fontSize: 16, color: '#08c', margin:'24px 12px' }} />
	        		
				     
				   <Dropdown overlay={menu}   placement="bottomCenter" >
				      <Button>bottomCenter</Button>
				    </Dropdown>
	        		
	        	</div>
	        </Header>
	        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,height:800 }}>
	          {children}
	          </Content> 
	        </Layout>
          </Layout>
    );
}

export default Header1;