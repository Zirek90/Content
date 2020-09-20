import React from "react";
import HeadingComponent from "./components/Heading";
import MainImageComponent from "./components/MainImage";
import ContentComponent from "./components/Content";

import { Loader } from "./utils/loader/Loader";
import { ErrorHandler } from "./utils/errorHandlers/ErrorHandler";
import { ErrorBox } from "./utils/errorHandlers/ErrorBox";

import { useErrorBoundary } from "use-error-boundary";
import { useFetch } from "./customHooks/useFetch";

import { MainContainer } from "./styles/ContainerStyles";

const url = "https://content-eu-4.content-cms.com";
const resource =
  "/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1";

function App() {
  const { data, loading, errors } = useFetch(url, resource);
  const { ErrorBoundary } = useErrorBoundary();

  if (loading) return <Loader />;
  if (errors) return <ErrorBox />;

  const content = data.elements;

  return (
    <MainContainer>
      <HeadingComponent heading={content.heading.value} />
      <div className="mainWrapper">
        
        <ErrorBoundary
          render={() => (
            <MainImageComponent mainImage={content.mainImage.value} url={url} />
          )}
          renderError={() => <ErrorHandler />}
        />

        <ErrorBoundary
          render={() => <ContentComponent content={content} />}
          renderError={() => <ErrorHandler />}
        />
      </div>
    </MainContainer>
  );
}

export default App;
