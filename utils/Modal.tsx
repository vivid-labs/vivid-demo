import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

import { Transition } from "./Transition";

export const Modal = ({ children, id, ariaLabel, show, handleClose }: any) => {
  const modalContent = useRef<HTMLDivElement>(null);

  // close the modal on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!show || modalContent.current?.contains(target)) {
        return;
      }
      handleClose();
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (keyCode !== 27) {
        return;
      }
      handleClose();
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 transition-opacity bg-white bg-opacity-75 backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden transform sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div
          className="w-full max-w-6xl max-h-full overflow-auto bg-white"
          ref={modalContent}
        >
          {children}
        </div>
      </Transition>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  id: PropTypes.string,
  ariaLabel: PropTypes.string,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
