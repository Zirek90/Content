import React from "react";

const BodyComponent = ({ body }) => (
  <div dangerouslySetInnerHTML={{ __html: body.join("") }}></div>
);

export default BodyComponent;
