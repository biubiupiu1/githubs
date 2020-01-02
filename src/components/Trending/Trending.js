import React, { Component } from 'react';
import './Trending.css';

import { getTrending } from '@/utils/API';

import LanguageSelect from '../common/LanguageSelect/LanguageSelect';
import List from '../common/List/List';
import Select from 'antd/es/select';
import 'antd/es/select/style/css';

const { Option } = Select;

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoading: false
    };
  }

  language = 'All';
  since = 'daily';

  componentDidMount() {
    this.getTrendData();
  }

  getTrendData() {
    this.setState({
      isLoading: true
    });
    let { language, since } = this;
    if (language === 'All') {
      language = null;
    }
    getTrending({ language, since }).then(res => {
      this.setState({
        list: res,
        isLoading: false
      });
    });
  }

  languageChange = language => {
    this.language = language;
    this.getTrendData();
  };

  selectChange = since => {
    this.since = since;
    this.getTrendData();
  };

  render() {
    let { isLoading, list } = this.state;
    return (
      <div className='trending'>
        <LanguageSelect onClick={this.languageChange}></LanguageSelect>
        <Select
          size='large'
          style={{ alignSelf: 'flex-end', width: 150, paddingBottom: '10px' }}
          defaultValue='daily'
          onChange={this.selectChange}
        >
          <Option value='daily'>Today</Option>
          <Option value='weekly'>This week</Option>
          <Option value='monthly'>This month</Option>
        </Select>
        <List isLoading={isLoading} list={list}></List>
      </div>
    );
  }
}

export default Trending;
