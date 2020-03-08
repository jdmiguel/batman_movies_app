import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { Row, Col } from "react-configurable-grid";
import { imageSrcRootUrl } from "../utils/commons";
import Layout from "../components/Layout";
import Thumb from "../components/Thumb";

interface movie {
  id: number;
  title: string;
  poster_path: string;
}
interface IHomeProps {
  movies: Array<movie>;
}

class Home extends React.Component<IHomeProps> {
  static async getInitialProps() {
    // Getting data from service
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman&page=1"
    );
    const data = await res.json();

    // Settting values as props
    return {
      page: 1,
      movies: data.results
    };
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#242424" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap"
            rel="stylesheet"
          />
          ><title>Batman movies</title>
        </Head>
        <Layout>
          <Row>
            {this.props.movies.map(movie => (
              <Col xs={12} sm={4} md={3} xl={2} key={movie.id}>
                <Thumb
                  id={movie.id}
                  title={movie.title}
                  imageSrc={`${imageSrcRootUrl}${movie.poster_path}`}
                />
              </Col>
            ))}
          </Row>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Home;
