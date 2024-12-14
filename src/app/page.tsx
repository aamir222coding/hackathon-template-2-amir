import Arrivals from "./components/Arrivals";
import Customers from "./components/Customers";
import Hero from "./components/Hero";
import Selling from "./components/Selling";
import Style from "./components/Style";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Arrivals/>
      <Selling />
      <Style/>
      <Customers/>
    </div>
  );
}
