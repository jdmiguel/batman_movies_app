import React, { Component, Fragment } from "react";
import Head from "next/head";
//import axios from "axios";
import Layout from "../components/Layout";

class Home extends Component {
  /*static async getInitialProps() {
    const res = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman"
    );
    return res;
  }*/

  render() {
    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#242424" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap"
            rel="stylesheet"
          />
          <title>Batman movies</title>
        </Head>
        <Layout>
          <p>Contenido</p>
        </Layout>
      </Fragment>
    );
  }
}

export default Home;
