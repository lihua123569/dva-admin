import React from 'react';
import { connect } from 'dva'; 
import styles from './error404.css';
 
const  error404 = ({ location }) => {
  return (
    
       <div className={styles.error404}>
       404
        </div>
    
  );
}

error404.propTypes = {
};

export default connect()(error404);
