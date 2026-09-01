import React, { ReactNode } from "react";

import { useClickOutsideListenerRef } from "../../hooks/useClickOutsideListenerRef";

interface OwnProps {
  onClose: () => void;
  children?: ReactNode;
}

export const Dialog = ({ children, onClose }: OwnProps) => {
  const ref = useClickOutsideListenerRef(onClose);

  return (
    <>
      <div className="flex justify-center w-screen items-start overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-hidden focus:outline-hidden">
        <div ref={ref} className="relative w-auto mx-auto my-6">
          {children}
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
