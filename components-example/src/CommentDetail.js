import React from 'react';

const CommentDetail = () => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img
          alt='avatar'
          src='https://images.unsplash.com/photo-1611119999058-882233e88d35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100'
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
  );
};

export default CommentDetail;
