import { Link } from 'react-router-dom';

export function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>404. Page Not Found.</h1>
      <Link to="/">Go to main page</Link>
    </div>
  );
}
