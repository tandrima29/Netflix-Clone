import Hero from "../../components/hero-section/hero";
import ExcitingMovies from "./ExcitingMovies";
import { RecentWatch } from "./Rercent";
import "./styles.css";
import TvActionAdventure from "./TvActionAdventure";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="p-3 p-md-5">
        <RecentWatch />
        <TvActionAdventure/>
        <ExcitingMovies/>
      </div>
    </div>
  );
}
