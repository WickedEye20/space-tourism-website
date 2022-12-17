import React from "react";
import ContentLoader from "react-content-loader";
const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={445}
    height={445}
    viewBox="0 0 445 445"
    backgroundColor="#f0f0f0"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <circle cx="222.5" cy="222.5" r="222.5" />
  </ContentLoader>
);
export default MyLoader;
