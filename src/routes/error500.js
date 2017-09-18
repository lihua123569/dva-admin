import React from 'react';
import { connect } from 'dva'; 
import styles from './error404.css';
 
function error500({ location }) {
  return (
    
       <div className={styles.error404}>500</div>
    
  );
}

error500.propTypes = {
};

export default connect()(error500);
