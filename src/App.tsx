import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react"
import { client } from "./lib/apollo";


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  // useEffect(() => {
  //   // REQUISIÇÃO COM APOLLO CLIENTE (MANEIRA NÃO COMUM)
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data);
  //   })
  // }, []);

  
  // REQUISIÇÃO COM APOLLO CLIENTE (MANEIRA MAIS USUAL)
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}
