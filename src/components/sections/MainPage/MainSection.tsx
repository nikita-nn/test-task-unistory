import { Planet } from "../../modules/widgets/Planet.tsx";
import { mockStats } from "../../../data/stats.ts";
import { useAnimate } from "../../../hooks/animateMe.ts";

/**
 * Главная секция лендинга.
 */

export const MainSection = () => {
  const animationClass = useAnimate("main-stats-container");

  return (
    <section className={"main-section"}>
      <div className={"flex flex-col gap-10 relative"}>
        <h1 className={"main-heading relative"}>
          <span>Explore Your own planet</span>
          <br />
          <span>In</span>
          <span className={"text-transparent text-stroke"}> our New </span>
          <span className={"bg-blend-multiply"}>metaverse</span>
        </h1>
        <Planet />
        <p className="main-description font-avenir">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={animationClass}>
        <h1 className={"main-subheading"}>roadmap stats</h1>
        <div className={"main-stats-container"}>
          {mockStats.map((stat, index) => (
            <div key={index}>
              <div className={`main-stats-elem`}>
                <h1 className={"main-stats-heading"}>
                  {stat.data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h1>
                <p className={"main-stats-description"}>{stat.name}</p>
              </div>
              <div className={"w-[12rem] h-[1px] bg-[#D2C4C4]"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
