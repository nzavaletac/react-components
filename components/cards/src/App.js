import { Container } from "./AppElements";
import { ButtonLetter } from "./components/ButtonLetter";
import { Info1Card } from "./components/Info1Card";
import { InfoCard } from "./components/InfoCard";
import { LoginCard } from "./components/LoginCard";
import { MagicButton } from "./components/MagicButton";
import { ProductCard } from "./components/ProductCard";

function App() {
  return (
    <Container>
      <ProductCard />
      <InfoCard />
      <Info1Card />
      <MagicButton />
      <LoginCard />
      <ButtonLetter />
    </Container>
  );
}

export default App;
