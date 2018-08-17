import FormContainer from './components/container/FormContainer';
import style from './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <FormContainer/>,
  document.getElementById('create-article-form')
);

module.hot.accept();