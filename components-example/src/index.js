import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
      <div className='comment'>
        <a href='/' className='avatar'>
          <img
            alt='avatar'
            src='https://images.unsplash.com/photo-1611157065521-0c2551563262?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
          />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00PM</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
      <div className='comment'>
        <a href='/' className='avatar'>
          <img
            alt='avatar'
            src='https://images.unsplash.com/photo-1611130346691-76c1ceee8acf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
          />
        </a>
        <div className='content'>
          <a href='/' className='author'>
            Sam
          </a>
          <div className='metadata'>
            <span className='date'>Today at 6:00PM</span>
          </div>
          <div className='text'>Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
