import { Container } from "./AppElements";
import { Info1Card } from "./components/Info1Card";
import { InfoCard } from "./components/InfoCard";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <Container>
      <ProductCard />
      <InfoCard />
      <Info1Card />
    </Container>
  );
}

export default App;
