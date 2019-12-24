import React from 'react';
import './App.scss';
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <div className="App">a</div>;
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOpenModal: (modalId, opened) => {
      dispatch(openedModalActionCreator(modalId, opened));
    },
    toggleLike: film => {
      dispatch(toggleLike(film));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
