var React = require('react');
var Actions = require('../actions');

var PostList = React.createClass({
  render: function () {
    var postList = this.props.posts.map(function (post) {
      return (
        <div key={post.id} className='post'>
          <div className='post-vote'>
            <i className='fa fa-arrow-up' onClick={Actions.upVote.bind(this, post.id)}></i>
            <div>{post.votes}</div>
            <i className='fa fa-arrow-down' onClick={Actions.downVote.bind(this, post.id)}></i>
          </div>
          <div className='content'>
            <a href={post.url}>{post.title}</a>
          </div>
        </div>
      );
    });
    return (
      <div>{postList}</div>
    );
  }
});

module.exports = PostList;