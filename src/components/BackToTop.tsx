import { useEffect, useState, useRef, FunctionComponent } from 'react';
import styled from 'styled-components';
import { animateScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const scrollOptions = {
  delay: 5,
  duration: 500,
  smooth: 'easeInOutCubic'
};

const AngleDoubleUpIcon = styled(FontAwesomeIcon)`
  display: block;
  color: #61dafb;
  font-size: 1.75em;
  padding-left: 0.1rem;
  margin: 0.75rem auto auto auto;
`;

const BackToTopLink = styled.a<{ show: boolean }>`
  width: 3.5rem;
  z-index: 9999;
  display: block;
  height: 3.5rem;
  right: 1.25rem;
  cursor: pointer;
  position: fixed;
  user-select: none;
  border-radius: 50%;
  background: rgb(37, 40, 47);
  -webkit-tap-highlight-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  transition: opacity 0.4s ease, bottom 0.4s ease;

  opacity: ${({ show }) => show ? 1 : 0};
  bottom: ${({ show }) => show ? '1.25' : '-3.5'}rem;
`;

// Write the show state value to a ref so we can use it as a check to prevent
// ...re-renders on every scroll down that triggers a show for the button
const BackToTop: FunctionComponent = () => {
  const showRef = useRef<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (!showRef.current && scrollY > 100) {
        showRef.current = true;
        setShow(true);
      } else if (scrollY === 0) {
        showRef.current = false;
        setShow(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackToTopLink
      show={show}
      role='button'
      aria-label='back to top'
      onClick={() => animateScroll.scrollToTop(scrollOptions)}
    >
      <AngleDoubleUpIcon icon='angle-double-up' />
    </BackToTopLink>
  );
};

export default BackToTop;
