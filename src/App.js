import {Container} from './Components/styles/Container.styled'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Components/styles/Global'
import Content from './Content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      {Content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
