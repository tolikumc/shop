import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from './redux/books-reducer';
import axios from 'axios';
import { Header } from './components/header';
import { Container, CardGroup } from 'semantic-ui-react';
import { ItemCard } from './components/item-card';
import { Filter } from './components/filter';

class App extends React.Component {
  componentDidMount() {
    axios.get('/books.json').then(({ data }) => {
      this.props.setBooks(data);
    });
  }

  render() {
    const { books, filterBy, setFilter } = this.props;

    return (
      <>
        <Container>
          <Header />
          <Filter toggleFilter={setFilter} filterBy={filterBy} />
          <CardGroup itemsPerRow={3}>
            {books.map(book => (
              <ItemCard {...book} key={book.id} />
            ))}
          </CardGroup>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.items,
    filterBy: state.books.filterBy
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
