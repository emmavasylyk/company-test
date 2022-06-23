import './App.css';
import style from './App.module.scss';
import 'modern-normalize/modern-normalize.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import MainArticle from './components/MainArticle/MainArticle';
import MenuTags from './components/MenuTags/MenuTags';
import Search from './components/Search/Search';
import MainListArticles from './components/MainListArticles/MainListArticles';
import News from './components/News/News';
import PromotionalOffers from './components/PromotionalOffers/PromotionalOffers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Container>
        <Header />
        <MainArticle />
        <MenuTags />
        <div className={style.Wrapper}>
          <MainListArticles />
          <div className={style.NestedWrapper}>
            <Search />
            <News />
          </div>
        </div>
      </Container>
      <PromotionalOffers />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
