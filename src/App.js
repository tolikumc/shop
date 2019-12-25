import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from './redux/books-reducer';
import * as filterActions from './redux/filter-reducer';
import axios from 'axios';
import { Header } from './components/header';
import { Container, CardGroup } from 'semantic-ui-react';
import { ItemCard } from './components/item-card';
import { Filter } from './components/filter';
import orderBy from 'lodash/orderBy';

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

const sort = (books, key) => {
  switch (key) {
    case 'all':
      return books;
    case 'price_low':
      return orderBy(books, ['price'], 'asc');
    case 'price_high':
      return orderBy(books, ['price'], 'desc');
    case 'author':
      return orderBy(books, ['author'], 'asc');
    default:
      return books;
  }
};

const mapStateToProps = state => {
  return {
    books: sort(state.books.items, state.filter.filterBy),
    filterBy: state.filter.filterBy
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
