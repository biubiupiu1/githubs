import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const navs = [
  {
    id: 1,
    title: 'Ranking',
    url: 'ranking',
    match: /(\/|\/ranking)$/
  },
  {
    id: 2,
    title: 'Trending',
    url: 'trending',
    match: /(\/trending)$/
  }
];

function Nav() {
  return (
    <div className='Nav'>
      <ul className='nav-list'>
        {navs.map(item => (
          <li key={item.id}>
            <NavLink
              isActive={(match, location) => item.match.test(location.pathname)}
              style={{
                color: '#000000'
              }}
              activeStyle={{
                color: '#bb2e1f'
              }}
              to={item.url}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
