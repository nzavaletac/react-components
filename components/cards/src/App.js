import { Container } from "./AppElements";
import { Info1Card } from "./components/Info1Card";
import { InfoCard } from "./components/InfoCard";
import { MagicButton } from "./components/MagicButton";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <Container>
      <ProductCard />
      <InfoCard />
      <Info1Card />
      <MagicButton />
    </Container>
  );
}

export default App;
