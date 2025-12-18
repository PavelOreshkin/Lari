import Providers from "../providers/root";
import MainRouter from "../routes";
import { ErrorBoundary } from "@/shared/lib/error";

const App = () => {
  return (
    <Providers>
      <ErrorBoundary>
        <div>header</div>
      </ErrorBoundary>
      <main style={{ flexGrow: 1 }}>
        <MainRouter />
      </main>
    </Providers>
  );
};

export default App;
