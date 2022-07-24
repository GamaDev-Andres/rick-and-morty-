import { Helmet } from "react-helmet-async";

const HeadSEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title || "Rick and Morty"}</title>
      <meta name="description" content={description || "App rick and morty"} />
    </Helmet>
  );
};

export default HeadSEO;
