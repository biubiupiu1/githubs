import React, { Component } from 'react';
import './Ranking.css';

import LanguageSelect from '../common/LanguageSelect/LanguageSelect';
import List from '../common/List/List';

import { getRanking } from '@/utils/API';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.getRankData();
  }

  getRankData(language) {
    this.setState({
      isLoading: true
    });
    getRanking(language).then(res => {
      this.setState({
        list: res,
        isLoading: false
      });
    });
  }

  selectClick = language => {
    this.getRankData(language);
  };

  render() {
    let { isLoading, list } = this.state;

    return (
      <div className='ranking'>
        <LanguageSelect onClick={this.selectClick}></LanguageSelect>
        <List isLoading={isLoading} list={list}></List>
      </div>
    );
  }
}

export default Ranking;
