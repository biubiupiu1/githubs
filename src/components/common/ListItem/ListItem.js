import React from 'react';
import './ListItem.css';
import RowItem from './RowItem';

const mock = {
  author: 'JohnSundell',
  name: 'Publish',
  avatar: 'https://github.com/JohnSundell.png',
  url: 'https://github.com/JohnSundell/Publish',
  description: 'A static site generator for Swift developers',
  language: 'Swift',
  stars: 870,
  forks: 23,
  open_issues_count: 50
};

const fomartNnm = num => {
  let reg = /(?!^)(?=(\d{3})+$)/g;
  return (num + '').replace(reg, ',');
};

const ListItem = ({ data = mock, index = 1 }) => {
  let {
    author,
    name,
    avatar,
    url,
    stars,
    forks,
    open_issues_count,
    description
  } = data;

  return (
    <div className='list-item'>
      <div className='list-item-header'>
        <span>#{index}</span>
      </div>
      <a href={url} target='_brank'>
        <div className='list-item-avatar'>
          <img alt={name} src={avatar}></img>
          <h1>{name}</h1>
        </div>
      </a>
      <p className='list-item-desc'>{description}</p>
      <RowItem icon='icon-yonghu' desc={author} color='#f4ea2a'></RowItem>
      <RowItem
        icon='icon-Starlarge'
        desc={fomartNnm(stars) + ' stars'}
        color='#ffd566'
      ></RowItem>
      <RowItem
        icon='icon-fork'
        desc={fomartNnm(forks) + ' forks'}
        color='#1296db'
      ></RowItem>
      {open_issues_count && (
        <RowItem
          icon='icon-issuesiconx'
          desc={fomartNnm(open_issues_count) + ' open issues'}
          color='#d4237a'
        ></RowItem>
      )}
    </div>
  );
};

export default ListItem;
