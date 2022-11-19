import {
  Card,
  CardButton,
  CardFooter,
  CardImg,
  CardInfo,
  TextBody,
  TextTitle,
} from "./ProductCardElements";
import { FaCartPlus } from "react-icons/fa";
import product from "../image/iphone.png";

export const ProductCard = () => {
  return (
    <Card>
      <CardImg src={product} />
      <CardInfo>
        <TextTitle>Product title </TextTitle>
        <TextBody>Product description and details</TextBody>
      </CardInfo>
      <CardFooter>
        <TextTitle>S/ 499.49</TextTitle>
        <CardButton>
          <FaCartPlus />
        </CardButton>
      </CardFooter>
    </Card>
  );
};
