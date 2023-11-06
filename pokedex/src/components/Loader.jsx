import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#ffffff"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="75" y="155" rx="3" ry="3" width="88" height="6" />
    <rect x="93" y="179" rx="3" ry="3" width="52" height="6" />
    <circle cx="119" cy="88" r="40" />
  </ContentLoader>
);

export default Loader;
