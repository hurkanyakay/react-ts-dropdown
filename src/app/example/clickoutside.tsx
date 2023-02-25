import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.MutableRefObject<any>, action: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props: {
  action: () => void;
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.action);

  return <span ref={wrapperRef}>{props.children}</span>;
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired
};

export default OutsideAlerter;
