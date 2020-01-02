import React from 'react';
import './List.css';

import ListItem from '../ListItem/ListItem';
import Loading from '../Loading/Loading';

const List = props => {
  let { isLoading, list } = props;
  return (
    <div className='common-list'>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className='common-list-wrap'>
          {list.map((item, index) => (
            <ListItem index={index} data={item} key={index}></ListItem>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
