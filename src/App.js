import GlobalStyle from './styles/global';
import Routes from './routes';

import { Container } from './styles/appStyles';

function App() {
  return (
    <div className="App">
      <Container>
          <Routes />
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
