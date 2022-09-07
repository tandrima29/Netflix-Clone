import Hero from "../../components/hero-section/hero";

import { RecentWatch } from "./Rercent";
import { ExcitingMovies } from "./ExcitingMovies";
import { TvActionAdventure } from "./TvActionAdventure";
import "./styles.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-3 p-md-5">
        <RecentWatch />
        <TvActionAdventure />
        <ExcitingMovies />
      </div>
    </div>
  );
}
