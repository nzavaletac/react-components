import { Container } from "./AppElements";
import { BasicButton } from "./components/BasicButton";
import { ButtonLetter } from "./components/ButtonLetter";
import { Info1Card } from "./components/Info1Card";
import { InfoCard } from "./components/InfoCard";
import { Letter } from "./components/Letter";
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
      <BasicButton />
      <Letter />
    </Container>
  );
}

export default App;
