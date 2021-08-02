import { Header, Nav, IconOpen, IconClose, NavMenu, NavItem, Link } from './style';
import IMAGE_LOGO from './../../assets/images/pokedex.png';
import { useState } from 'react';
import { useShowFixed } from '../../hooks/useShowFixed';

export const NavBar = () => {
  const { showFixed } = useShowFixed()
  const [active, setActive] = useState(false)

  const handleClick = () => setActive(!active);

  const ShowNav = () => active ? <IconClose onClick={handleClick} /> : <IconOpen onClick={handleClick} />

  const renderHeader = (fixed = false) => {
    return (
      <Header fixed={fixed}>
        <Nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={IMAGE_LOGO} alt={IMAGE_LOGO} style={{ height: '60px' }} />
          </div>

          <ShowNav />

          <NavMenu active={active}>
            <NavItem><Link exact to='home' onClick={() => setActive(false)}>Home</Link></NavItem>
            <NavItem><Link exact to='statistics' onClick={() => setActive(false)}>Statistics</Link></NavItem>
          </NavMenu>
        </Nav>
      </Header>
    )
  }

  return (
    <>
      {renderHeader()}
      {showFixed && renderHeader(true)}
    </>
  )
}