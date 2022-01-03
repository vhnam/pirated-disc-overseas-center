import Head from "next/head";
import { ReactNode } from "react";

import ModalProvider from "../../providers/modal";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&family=Pinyon+Script&family=Cuprum&display=swap"
          rel="stylesheet"
        />

        <title>Trung Tâm Băng Đĩa Lậu Hải Ngoại</title>
      </Head>
      <ModalProvider />
      {children}
    </>
  );
};

export default Layout;
