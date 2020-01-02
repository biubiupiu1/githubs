import axios from 'axios';

export const getRanking = language => {
  let url = language
    ? `https://api.github.com/search/repositories?q=stars%3A%3E100 language:${language}`
    : 'https://api.github.com/search/repositories?q=stars%3A%3E100';

  return axios.get(url).then(res => {
    return res.data.items.map(item => {
      let {
        name,
        owner,
        html_url,
        description,
        language,
        forks_count,
        stargazers_count,
        open_issues_count
      } = item;
      let { avatar_url, login } = owner;

      return {
        author: login,
        name,
        avatar: avatar_url,
        url: html_url,
        description,
        language,
        stars: stargazers_count,
        forks: forks_count,
        open_issues_count: open_issues_count
      };
    });
  });
};

export const getTrending = ({ language, since } = {}) => {
  let url = `https://github-trending-api.now.sh?`;

  if (language) {
    url += `language=${language}&`;
  }
  if (since) {
    url += `since=${since}&`;
  }

  return axios.get(url).then(res => {
    return res.data;
  });
};