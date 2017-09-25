import React from 'react';
import { Link } from 'dva/router';
import { Avatar, Badge, Dropdown, Button, Layout, Menu, Icon } from 'antd';
import FooterComponent from './App/layout/FooterComponent';
import HeaderComponent from './App/layout/HeaderComponent';
import SiderComponent from './App/layout/SiderComponent';

const {	Footer,	Header,	Sider,	Content} = Layout;

class Main extends React.Component {
	
 state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
  	 const {children, location, dispatch} = this.props;
	return(



		<Layout>
		
			<Sider trigger={null} collapsible  collapsed={this.state.collapsed} >
	       		<SiderComponent />
	       	</Sider>
	       	
	     	<Layout>
	        	<HeaderComponent state={this.state} toggle={this.toggle}/>
		        <Content style={{ margin: '15px 16px', padding: 24, background: '#fff', minHeight: 280,height:800 }}>
		          {children}
		        </Content> 
	        	<FooterComponent />
	        </Layout>
	        
        </Layout>
	);
	 }
}

export default Main;