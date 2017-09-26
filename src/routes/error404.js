import React from 'react';
import { connect } from 'dva'; 
import styles from './error404.css';
import { Breadcrumb,Icon } from 'antd';

const  error404 = ({ location }) => {
  return (
       <div className={styles.error404}>
	       	<div className={styles.errorBreadcrumb}>
		       	<Breadcrumb  separator=">">
				    <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>
				    <Breadcrumb.Item><a href="">用户管理</a></Breadcrumb.Item>
				    <Breadcrumb.Item>404</Breadcrumb.Item>
			  	</Breadcrumb>
			</div>
       		<div>
       			404
       		</div>
        </div>
  );
}

error404.propTypes = {
};

export default connect()(error404);
