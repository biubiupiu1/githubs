import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './LanguageSelect.css';

const language = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

class LanguageSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  onClick = index => {
    this.setState({
      activeIndex: index
    });
    this.props.onClick(language[index]);
  };

  render() {
    return (
      <ul className='language-select'>
        {language.map((item, index) => (
          <li
            style={{
              color: index === this.state.activeIndex ? '#bb2e1f' : '#000000'
            }}
            onClick={() => this.onClick(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

LanguageSelect.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LanguageSelect;
