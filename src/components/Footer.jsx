import styled from 'styled-components'

export default function Footer() {
  return (
    <Foot>
      <span>Tesla Clone © {new Date().getFullYear()}</span>
      <span>Portfolio project by <a href="https://github.com/code-say" target="_blank" rel="noreferrer">Sayan Mandal</a></span>
      <span>Not affiliated with Tesla, Inc.</span>
      <a href="https://github.com/code-say/TeslaClone" target="_blank" rel="noreferrer">Source on GitHub</a>
    </Foot>
  )
}

const Foot = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px 20px;
  padding: 8px 16px 0;
  font-size: 12px;
  color: #5c5e62;

  a { text-decoration: underline; text-underline-offset: 2px; }
  a:hover { color: #171a20; }
`
