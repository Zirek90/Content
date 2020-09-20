import React from "react";
import { MainImageContainer } from "../styles/ContainerStyles";
import { Image } from "../styles/ImageStyles";

const MainImageComponent = ({ mainImage, url }) => (
  <MainImageContainer>
    <Image
      replacer={url + mainImage.leadImage.url}
      src={url + mainImage.leadImage.url}
      alt={mainImage.leadImageCaption.value}
    />
    <figcaption>{mainImage.leadImageCaption.value}</figcaption>
  </MainImageContainer>
);

export default MainImageComponent;
