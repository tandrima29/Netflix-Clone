import Hero from "../../components/hero-section/hero";
import { RecentWatch } from "./Rercent";
import { ExcitingMovies } from "./ExcitingMovies";
import { TvActionAdventure } from "./TvActionAdventure";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <Hero />

      <RecentWatch />
      <ExcitingMovies />
      <TvActionAdventure />
    </div>
  );
}
