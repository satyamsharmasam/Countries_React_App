import { useRouteError } from "react-router";

const Error404 = () => {
  const error = useRouteError();
  console.log(error);
  return <div>Something went wrong {error.status}</div>;
};

export default Error404;
