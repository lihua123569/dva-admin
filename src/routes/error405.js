import React from 'react';
import { connect } from 'dva'; 
import styles from './error404.css';
import {MyComponent} from './App/layout/Footer';
function error404({ location }) {
  return (
    
       <div className={styles.error404}>
       <MyComponent />
        </div>
    
  );
}

error404.propTypes = {
};

export default connect()(error404);
