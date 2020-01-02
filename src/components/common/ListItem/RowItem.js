import React from 'react';
import PropTypes from 'prop-types';
import './RowItem.css';

const RowItem = ({ icon, desc, color }) => {
  return (
    <div className='row-item'>
      <div style={{ color }} className={'row-item-icon iconfont ' + icon}></div>
      <div className='row-item-desc'>{desc}</div>
    </div>
  );
};

RowItem.propTypes = {
  icon: PropTypes.string.isRequired,
  desc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  color: PropTypes.string.isRequired
};

export default RowItem;
