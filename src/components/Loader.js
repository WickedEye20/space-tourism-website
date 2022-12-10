import React from "react";
import ContentLoader from "react-content-loader";
const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={445}
    height={445}
    viewBox="0 0 445 445"
    backgroundColor="#c7c7c7"
    foregroundColor="#dedede"
    {...props}
  >
    <circle cx="219" cy="229" r="215" />
  </ContentLoader>
);
export default MyLoader;
