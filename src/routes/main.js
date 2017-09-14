import React from 'react';
import {Link} from 'dva/router';
import { Layout, Menu, Icon } from 'antd';


const { Header ,Sider, Content } = Layout;

/* const {children, location, dispatch} = this.props;*/
 
function Header1({state,location}){
    return (
    	  <Layout>
	        <Sider
	          trigger={null}
	          collapsible
	         	 
	        >
	          <div className="logo" />
	          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
	            <Menu.Item key="1">
	              <Link to="/users" >
		                    <Icon type="bars" />Users
		                </Link>
	            </Menu.Item>
	            <Menu.Item key="2">
	             <Link to="/main" >
		                    <Icon type="bars" />main
		                </Link>
	            </Menu.Item>
	              <Menu.Item key="3">
	             <Link to="/error404" >
		                    <Icon type="bars" />error404
		                </Link>
	            </Menu.Item>
	             
	          </Menu>
	        </Sider>
	    	 <Layout>
	          
	        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
	          
	          </Content> 
	        </Layout>
          </Layout>
    );
}

export default Header1;