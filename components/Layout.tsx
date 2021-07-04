import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'CardShop' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
    </Head>
    <Header />
    <main className="py-3">
      <Container>{children}</Container>
    </main>
    <Footer />
  </div>
);

export default Layout;
