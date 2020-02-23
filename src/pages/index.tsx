import React, { Component, Fragment } from "react";
import Head from "next/head";

import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";
import Thumb from "../components/Thumb";

import { Row, Col } from "react-configurable-grid";

const imageSrcRootUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

interface movie {
  id: number;
  title: string;
  poster_path: string;
}
interface IHomeProps {
  movies: Array<movie>;
}

class Home extends Component<IHomeProps> {
  static async getInitialProps() {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman"
    );
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.results.length}`);

    return {
      movies: data.results
    };
  }

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
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
            rel="stylesheet"
          />
          ><title>Batman movies</title>
        </Head>
        <Layout>
          <Row>
            {this.props.movies.map(movie => (
              <Col xs={12} sm={6} lg={4} xl={3} key={movie.id}>
                <Thumb
                  title={movie.title}
                  imageSrc={`${imageSrcRootUrl}${movie.poster_path}`}
                />
              </Col>
            ))}
          </Row>
        </Layout>
      </Fragment>
    );
  }
}

export default Home;
