import { GlobalStyles } from './assets/style/GlobalStyle';
import { Routes } from './routes/Routes';
import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <>
      <my-card name="Josefa Rodriguez"
        image='https://images.pexels.com/photos/12145393/pexels-photo-12145393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
      </my-card>
      <my-card name="Jose Rodriguez"
        image='https://images.pexels.com/photos/12145393/pexels-photo-12145393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
      </my-card>
      <GlobalStyles />
      <NavBar />
      <Routes />
    </>
  );
}

export default App;