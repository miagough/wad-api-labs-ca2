import React from "react";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom';
import Spinner from '../components/spinner'
import PageTemplate from "../components/templateMoviePage";
import MovieCredit from "../components/movieCredit";

const CreditsPage = (props) => {
    const { id } = useParams();
    const { data: credits, error, isLoading, isError } = useQuery(
      ["credits", { id: id }],
      MovieCredit
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
  
  
    return (
      <>
        {credits ? (
          <>
            <PageTemplate credits={credits}>
             
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for credits</p>
        )}
      </>
    );
  };
  
  export default CreditsPage;