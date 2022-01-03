import { MouseEvent, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";

import { disableScroll, enableScroll } from "../../utils/behaviours";

export interface ModalProps {
  children: ReactNode;
  disableOverlayInteraction?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  disableOverlayInteraction = false,
  isOpen,
  onClose,
}: ModalProps) => {
  const [mountDownTarget, setMountDownTarget] = useState<HTMLElement | null>(
    null
  );

  const handleOverlayClick = (e: MouseEvent<HTMLElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (mountDownTarget !== e.target) {
      return;
    }

    setMountDownTarget(null);

    if (onClose) {
      onClose();
    }
  };

  const handleOverlayMouseDown = (e: MouseEvent<HTMLElement>) => {
    setMountDownTarget(e.target as HTMLElement);
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={clsx(
              "flex items-end justify-center",
              "min-h-screen pt-4 px-4 pb-20",
              "text-center sm:block sm:p-0"
            )}
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onMouseDown={
                !disableOverlayInteraction ? handleOverlayMouseDown : undefined
              }
              onClick={
                !disableOverlayInteraction ? handleOverlayClick : undefined
              }
            />
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className={clsx(
                "inline-block align-bottom",
                "bg-white rounded-lg text-left",
                "overflow-hidden shadow-xl transform transition-all",
                "sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              )}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
