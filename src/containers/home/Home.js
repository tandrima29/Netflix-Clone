import Hero from "../../components/hero-section/hero";
import { RecentWatch } from "./Rercent";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <RecentWatch />
    </div>
  );
}
