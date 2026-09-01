import { useCallback, useEffect, useRef } from "react";

//Based on https://dev.to/vibhanshu909/click-outside-listener-for-react-components-in-10-lines-of-code-using-hooks-pp8

export const useClickOutsideListenerRef = (onClose: () => void) => {
  const ref = useRef(null);

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickListener = useCallback(
    (e: PointerEvent) => {
      if (!(ref.current! as any)?.contains(e.target)) {
        onClose?.();
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current]
  );

  useEffect(() => {
    // "pointerdown" rather than "click" on purpose. The click that opens a
    // dialog is still propagating when React mounts it, and since React 18
    // effects attached during a discrete event run before that event finishes
    // reaching document. A "click" listener would therefore catch the opening
    // click, see a target outside the dialog, and close it again immediately.
    // pointerdown for the opening interaction has already been dispatched by
    // the time this runs, so only a genuine later press closes the dialog.
    document.addEventListener("pointerdown", clickListener);
    document.addEventListener("keyup", escapeListener);

    return () => {
      document.removeEventListener("pointerdown", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
};
