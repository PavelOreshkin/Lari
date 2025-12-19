import Providers from "../providers/root";
import MainRouter from "../routes";

const App = () => {
  return (
    <Providers>
      <MainRouter />
    </Providers>
  );
};

export default App;
