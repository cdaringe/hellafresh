import { LayoutFn } from '../../app-meta/mod.ts';

import Header from "Header/browser.tsx";

const Layout: LayoutFn = ({ Component }) => {
   return (
    <>
      <Header />
      <Component />
    </>
  );

}

export default Layout;
