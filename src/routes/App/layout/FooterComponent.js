import React, { Component, PropTypes } from 'react';
import { Layout } from 'antd';

const {Footer} = Layout;

// 组件本身
// 所需要的数据通过 Container Component 通过 props 传递下来
const FooterComponent = ()=>{
	 return (
	 	<Footer style={{background:'#fff'}}>
	      	Ant Design ©2016 Created by Ant UED
	    </Footer>
	  );
           
}
FooterComponent.propTypes = {};

// 并不会监听数据
export default FooterComponent;