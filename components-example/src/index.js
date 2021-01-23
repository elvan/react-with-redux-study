import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author='Sam'
        imageUrl='https://images.unsplash.com/photo-1611119999058-882233e88d35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
      />
      <CommentDetail
        author='Alexa'
        imageUrl='https://images.unsplash.com/photo-1611080466336-664df15e5d79?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
      />
      <CommentDetail
        author='Jane'
        imageUrl='https://images.unsplash.com/photo-1611272785707-d9520d586f89?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
