import React from 'react';
import {Link} from 'dva/router';
import {Avatar, Badge,Dropdown, Button, Layout, Menu, Icon } from 'antd';

const { Header ,Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

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