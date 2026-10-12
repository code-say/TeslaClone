import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CloseIcon } from './Icons'
import { topNav, drawerLinks } from '../data'

const slug = (s) => s.toLowerCase().replace(/\s+/g, '-')

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <Bar $scrolled={scrolled}>
      <Logo href="#model-s" aria-label="Home">
        <img src="/images/logo.svg" alt="Tesla clone logo" width="120" height="24" />
      </Logo>

      <Center aria-label="Primary">
        {topNav.map((item) => (
          <NavLink key={item} href={`#${slug(item)}`}>{item}</NavLink>
        ))}
      </Center>

      <Right>
        <NavLink href="#accessories" className="hide-sm">Shop</NavLink>
        <NavLink href="#" className="hide-sm" onClick={(e) => e.preventDefault()}>Account</NavLink>
        <MenuButton onClick={() => setOpen(true)} aria-expanded={open} aria-controls="drawer">
          Menu
        </MenuButton>
      </Right>

      <Backdrop $open={open} onClick={close} aria-hidden="true" />
      <Drawer id="drawer" $open={open} aria-hidden={!open} aria-label="Menu">
        <CloseRow>
          <IconButton onClick={close} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <CloseIcon />
          </IconButton>
        </CloseRow>
        <ul>
          {topNav.map((item) => (
            <li key={item} className="show-md">
              <a href={`#${slug(item)}`} onClick={close} tabIndex={open ? 0 : -1}>{item}</a>
            </li>
          ))}
          {drawerLinks.map((item) => (
            <li key={item}>
              <a href="#" onClick={(e) => { e.preventDefault(); close() }} tabIndex={open ? 0 : -1}>{item}</a>
            </li>
          ))}
        </ul>
      </Drawer>
    </Bar>
  )
}

const Bar = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 10;
  height: 56px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  background: ${(p) => (p.$scrolled ? 'rgba(255,255,255,0.72)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$scrolled ? 'saturate(180%) blur(12px)' : 'none')};

  @media (max-width: 600px) {
    padding: 0 12px;
    .hide-sm { display: none; }
  }
`

const Logo = styled.a`
  display: flex;
  img { display: block; height: 16px; width: auto; }
`

const Center = styled.nav`
  display: flex;
  gap: 2px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1100px) {
    display: none;
  }
`

const pill = `
  font-size: 14px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: background 0.25s ease;
  white-space: nowrap;
  &:hover { background: rgba(23, 26, 32, 0.08); }
`

const NavLink = styled.a`${pill}`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

const MenuButton = styled.button`${pill}`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
  opacity: ${(p) => (p.$open ? 1 : 0)};
  pointer-events: ${(p) => (p.$open ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 100vw);
  background: #fff;
  padding: 20px 24px;
  overflow-y: auto;
  transform: translateX(${(p) => (p.$open ? '0' : '100%')});
  transition: transform 0.35s cubic-bezier(0.5, 0, 0, 0.75);
  box-shadow: ${(p) => (p.$open ? '-8px 0 30px rgba(0,0,0,0.12)' : 'none')};

  ul { list-style: none; margin-top: 12px; }
  li a {
    display: block;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    transition: background 0.2s ease;
  }
  li a:hover { background: rgba(23, 26, 32, 0.06); }
  li.show-md { display: none; }

  @media (max-width: 1100px) {
    li.show-md { display: list-item; }
  }
`

const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
`

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: background 0.2s ease;
  &:hover { background: rgba(23, 26, 32, 0.08); }
`
