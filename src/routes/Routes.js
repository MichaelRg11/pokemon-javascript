import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Statistics } from '../pages/Statistics';

export const Routes = () => {
  return (
    <>
      <Switch>
        {route.map(route => {
          return (<Route {...route} />)
        })}
      </Switch>
    </>
  )
}

const route = [
  {
    name: 'Home',
    path: '/home',
    exact: true,
    component: Home,
  }, {
    name: 'Statistics',
    path: '/statistics',
    exact: true,
    component: Statistics,
  }, {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  }
];