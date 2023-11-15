import { useRef, useEffect } from "react";

function useDocumentTitle(title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef<string>(document.title);

  useEffect(() => {
    document.title = `Товары | ${title}`;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  });
}

export default useDocumentTitle;
