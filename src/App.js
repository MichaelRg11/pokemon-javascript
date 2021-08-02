import { GlobalStyles } from './assets/style/GlobalStyle';
import { Routes } from './routes/Routes';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes />
    </>
  );
}

export default App;