import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ChevronDown } from './Icons'

export default function Section({ id, title, description, image, leftBtn, rightBtn, first, footer }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(first)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.45 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Wrap id={id} ref={ref} $bg={image} aria-label={title}>
      <Fade $visible={visible} className="text">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Fade>

      <Bottom>
        <Fade $visible={visible} $delay="0.15s">
          <Buttons>
            <Primary href="#" onClick={(e) => e.preventDefault()}>{leftBtn}</Primary>
            {rightBtn && <Secondary href="#" onClick={(e) => e.preventDefault()}>{rightBtn}</Secondary>}
          </Buttons>
        </Fade>
        {first && (
          <Arrow href="#model-y" aria-label="Scroll to next section">
            <ChevronDown />
          </Arrow>
        )}
        {footer}
      </Bottom>
    </Wrap>
  )
}

const Wrap = styled.section`
  position: relative;
  height: 100vh;
  height: 100svh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #e8e8e8;
  background-image: url('/images/${(p) => p.$bg}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .text {
    padding-top: 16vh;
    text-align: center;
  }
  h1 {
    font-size: clamp(32px, 4.5vw, 40px);
    font-weight: 500;
    letter-spacing: -0.01em;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #393c41;
  }
  p:hover { text-decoration: underline; text-underline-offset: 3px; }
`

const Fade = styled.div`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateY(${(p) => (p.$visible ? '0' : '24px')});
  transition: opacity 0.7s ease ${(p) => p.$delay || '0s'}, transform 0.7s ease ${(p) => p.$delay || '0s'};
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 32px;
  width: 100%;
`

const Buttons = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 12px;
  }
`

const Primary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 264px;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: rgba(23, 26, 32, 0.8);
  backdrop-filter: blur(8px);
  transition: background 0.3s ease;
  &:hover { background: rgba(23, 26, 32, 0.95); }

  @media (max-width: 680px) {
    width: min(328px, calc(100vw - 48px));
  }
`

const Secondary = styled(Primary)`
  color: #393c41;
  background: rgba(244, 244, 244, 0.65);
  &:hover { background: rgba(244, 244, 244, 0.9); }
`

const Arrow = styled.a`
  color: #fff;
  display: flex;
  animation: animateDown infinite 1.5s;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
`
