import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  resolvers: {}
});


const DATA_WHICH_WORKS = {
  monkeyEnclosure: {
    __typename: 'Enclosure:0',
    hasMoat: true,
    numberOfMonkeys: 5,
    numberOfTrees: 2
  }
};

const DATA_WHICH_SHOULD_WORK = {
  monkeyEnclosure: {
    __typename: 'Enclosure:0',
    hasMoat: true,
    numberOfMonkeys: 5
  }
}

client.cache.writeData({
  data: DATA_WHICH_WORKS
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
