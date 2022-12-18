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

const MyLoader2 = (props) => (
  <ContentLoader
    speed={2}
    width={420}
    height={480}
    viewBox="0 0 420 500"
    backgroundColor="#f0f0f0"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="100" y="0" rx="2" ry="2" width="224" height="60" />
    <rect x="0" y="98" rx="2" ry="2" width="420" height="15" />
    <rect x="30" y="125" rx="2" ry="2" width="360" height="15" />
    <rect x="20" y="150" rx="2" ry="2" width="380" height="15" />
    <rect x="10" y="175" rx="2" ry="2" width="400" height="15" />
    <rect x="50" y="200" rx="2" ry="2" width="320" height="15" />
    <rect x="100" y="330" rx="2" ry="2" width="220" height="65" />
    <rect x="100" y="440" rx="2" ry="2" width="220" height="65" />
  </ContentLoader>
);

export { MyLoader, MyLoader2 };
