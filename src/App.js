import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from './redux/books-reducer';
import * as filterActions from './redux/filter-reducer';
import * as cartActions from './redux/cart-reducer';
import axios from 'axios';
import { Header } from './components/header';
import { Container, CardGroup } from 'semantic-ui-react';
import { ItemCard } from './components/item-card';
import { Filter } from './components/filter';
import orderBy from 'lodash/orderBy';
import uniqBy from 'lodash/uniqBy';

class App extends React.Component {
  componentDidMount() {
    axios.get('/books.json').then(({ data }) => {
      this.props.setBooks(data);
    });
  }

  render() {
    const {
      books,
      filterBy,
      setFilter,
      searchQuery,
      setSearchQuery,
      totalPrice,
      countBook,
      addToCart,
      itemCart,
      removeFromCart
    } = this.props;

    return (
      <>
        <Container>
          <Header
            totalPrice={totalPrice}
            countBook={countBook}
            items={itemCart}
            removeBook={removeFromCart}
          />
          <Filter
            toggleFilter={setFilter}
            filterBy={filterBy}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CardGroup itemsPerRow={3}>
            {books.map(book => (
              <ItemCard {...book} key={book.id} addToCart={addToCart} />
            ))}
          </CardGroup>
        </Container>
      </>
    );
  }
}

const sort = (books, key, searchKey) => {
  if (searchKey !== '') {
    books.filter(
      i =>
        i.title.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0 ||
        i.author.toLowerCase().indexOf(searchKey.toLowerCase()) >= 0
    );
  }

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
    books: sort(
      state.books.items,
      state.filter.filterBy,
      state.filter.searchQuery
    ),
    filterBy: state.filter.filterBy,
    searchQuery: state.filter.searchQuery,
    totalPrice: state.cart.items.reduce((acc, book) => acc + book.price, 0),
    countBook: state.cart.items.length,
    itemCart: uniqBy(state.cart.items, i => i.id)
    // addedCounter: state.cart.items.reduce((acc, book) => acc + (book.id === id ? 1: 0), 0)
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch),
  ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
