import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { setBooks } from './redux/books-reducer';
import axios from 'axios';
import { Header } from './components/header';
import { Container } from 'semantic-ui-react';
import { ItemCard } from './components/item-card';

class App extends React.Component {
  componentDidMount() {
    axios.get('/books.json').then(({ data }) => {
      this.props.setBooks(data);
    });
  }

  render() {
    const { books } = this.props;
    return (
      <>
        <Container>
          <Header />
          <ul>
            {books.map(book => (
              <ItemCard
                price={book.price}
                author={book.author}
                image={book.image}
                title={book.title}
              />
            ))}
          </ul>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(setBooks(books))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
