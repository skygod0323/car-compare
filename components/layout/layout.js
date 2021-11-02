import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from "next/head";

export default class Layout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}