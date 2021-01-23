import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Today at 4:45PM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/people'
      />
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Today at 2:00AM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/fashion'
      />
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Yesterday at 5:00PM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/city'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
