import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to continue?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          timeAgo='Today at 4:45PM'
          content={faker.lorem.sentence()}
          avatar='http://placeimg.com/64/64/arch'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          timeAgo='Today at 4:45PM'
          content={faker.lorem.sentence()}
          avatar='http://placeimg.com/64/64/nature'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.findName()}
          timeAgo='Today at 2:00AM'
          content={faker.lorem.sentence()}
          avatar='http://placeimg.com/64/64/people'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
