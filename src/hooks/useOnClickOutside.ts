import { useRef, useEffect } from 'react';

import type { RefObject } from 'react';

// Events to call addEventListener/removeEventListener for if not specified
const _defaultEvents = ['mousedown', 'touchstart'];

const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (...args: any[]) => any,
  events: string[] = _defaultEvents
): void => {
  const onClickAwayRef = useRef(onClickAway);

  useEffect(() => {
    onClickAwayRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const onClickHandler = (e: Event): void => {
      const { current: el } = ref;
      !el?.contains(e.target as Node) && onClickAwayRef.current(e);
    };

    events.forEach((evtName) => document.addEventListener(evtName, onClickHandler));

    return () => {
      events.forEach((evtName) => document?.removeEventListener(evtName, onClickHandler));
    };
  }, [ref, events]);
};

export default useOnClickOutside;
