import React, {	Component,	PropTypes} from 'react';
import { Link } from 'dva/router';
import { Avatar, Badge, Dropdown, Button, Layout, Menu, Icon } from 'antd';

const {	Header,	Sider,	Content} = Layout;

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

const HeaderComponent = ({	state,	toggle}) => {

	return(
			<div>
				<Header style={{background:'#fff'}}>
				 	<Icon className="trigger"   type={state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle}/>
	        	<div style={{float:'right'}}>
	        		<Icon type="message" style={{ fontSize: 16, color: '#08c' , margin:'24px 12px'}} />
	        		<Icon type="mail" style={{ fontSize: 16, color: '#08c' , margin:'24px 12px'}} />
	        		<Icon type="notification" style={{ fontSize: 16, color: '#08c', margin:'24px 12px' }} />
				     
					    <Dropdown overlay={menu}   placement="bottomCenter" >
					      <Button>bottomCenter</Button>
					    </Dropdown>
	        	</div>
	      </Header>
	    </div>
	);
}

HeaderComponent.propTypes = {};

// 并不会监听数据
export default HeaderComponent;