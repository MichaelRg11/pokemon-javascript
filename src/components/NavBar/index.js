import { useState, useEffect } from 'react';
import { Header, Nav, IconOpen, IconClose, NavMenu, NavItem, Link } from './style';
import IMAGE_LOGO from './../../assets/images/pokedex.png';
import { useShowFixed } from '../../hooks/useShowFixed';

export const NavBar = () => {
  const { showFixed } = useShowFixed()
  const [active, setActive] = useState(false)
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  const handleClick = () => setActive(!active);

  const ShowNav = () => active ? <IconClose onClick={handleClick} /> : <IconOpen onClick={handleClick} />

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  const renderHeader = (fixed = false) => {
    return (
      <Header fixed={fixed}>
        <Nav>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={IMAGE_LOGO} alt={IMAGE_LOGO} style={{ height: '60px' }} />
          </div>
          {isReadyForInstall && (
            <button onClick={downloadApp}> Descargar PWA </button>
          )}
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