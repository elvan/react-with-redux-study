import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          timeAgo='Today at 4:45PM'
          content={faker.lorem.sentence()}
          avatar='http://placeimg.com/64/64/arch'
        />
      </ApprovalCard>
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Today at 4:45PM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/nature'
      />
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Today at 2:00AM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/people'
      />
      <CommentDetail
        author={faker.name.findName()}
        timeAgo='Yesterday at 5:00PM'
        content={faker.lorem.sentence()}
        avatar='http://placeimg.com/64/64/tech'
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
