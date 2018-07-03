import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book =>
      (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    );
  }

  render() {
    return (<ul className="list-group col-sm-4">
      {this.renderList()}
    </ul>)
  }
}

// Whatever is returned will show up as props inside of BookList
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to
  // all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
