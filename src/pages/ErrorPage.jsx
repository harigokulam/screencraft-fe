import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container" id="error-page" style={{paddingTop: 80}}>
      <div className="box" >
        <div className="notification is-warning">
          <h1 className="title">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <hr/>
          <div>
            <Link className="button" to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
