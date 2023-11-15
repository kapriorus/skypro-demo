import { FC } from "react";
import Header from "./Header";

type TLayoutComponentProps = {
  children: React.ReactNode;
};

const LayoutComponent: FC<TLayoutComponentProps> = function ({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default LayoutComponent;
