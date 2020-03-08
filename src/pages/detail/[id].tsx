import React from "react";
import { Row, Col } from "react-configurable-grid";
import { imageSrcRootUrl } from "../../utils/commons";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

interface IDetailProps {
  title: string;
  summary: string;
  rating: string;
  release: string;
  imageSrc: string;
}

class Detail extends React.Component<IDetailProps> {
  static async getInitialProps({ query }) {
    // Getting data from service
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman"
    );
    const data = await res.json();

    // Filtering specific movie by id from data
    const [movie] = data.results.filter(
      (movie: any) => String(movie.id) === query.id
    );

    // Deestructuring movie data and settting values as props
    const { title, overview, vote_average, release_date, poster_path } = movie;

    return {
      title,
      summary: overview,
      rating: vote_average,
      release: release_date,
      imageSrc: `${imageSrcRootUrl}${poster_path}`
    };
  }

  render() {
    const { title, summary, rating, release, imageSrc } = this.props;
    return (
      <Layout>
        <Row>
          <Col xs={0} sm={1} lg={2} />
          <Col xs={12} sm={10} lg={8}>
            <Card
              title={title}
              summary={summary}
              rating={rating}
              release={release}
              imageSrc={imageSrc}
            />
          </Col>
          <Col xs={0} sm={1} lg={2} />
        </Row>
      </Layout>
    );
  }
}

export default Detail;
