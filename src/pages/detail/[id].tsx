import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface movie {
  id: number;
  title: string;
  poster_path: string;
}

interface IDetailProps {
  getInitialProps: any;
  movie: Array<movie>;
}

//const Detail:React.FC<IDetailProps> = ({ movie })  => (
const Detail = ({ movie }) => (
  <Layout>
    <h1>{movie.title}</h1>
    <p>Detail</p>
  </Layout>
);

Detail.getInitialProps = async ({ query }) => {
  //useRouter().query.id;
  const res = await fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=5d77a3a4cf8ca6ff499952f4eda298d9&query=batman"
  );
  const data = await res.json();

  console.log(data.results[1].id);
  console.log(query.id);

  return {
    movie: data.results.filter(movie => movie.id === query.id)
  };
};

export default Detail;
