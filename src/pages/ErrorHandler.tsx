import { useRouteError } from "react-router-dom";
import { ErrorWrapper } from "../styles/ErrorComponent.styles";

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </ErrorWrapper>
  );
};

export default ErrorPage;
