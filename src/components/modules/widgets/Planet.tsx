/**
 * Изображение планеты.
 * @param isClientArea - флаг, на основе которого изображение планеты.
 * адаптируется под личный кабинет.
 */

export const Planet = ({
  isClientArea = false,
}: {
  isClientArea?: boolean;
}) => {
  return (
    <>
      <img
        src={"planet/planet.png"}
        className={"planet-picture"}
        alt={"planet"}
      />
      <img
        src={"planet/gray_ring.svg"}
        alt={"planet"}
        className={"planet-ring-1"}
      />
      <img
        src={"planet/small_ring_1.svg"}
        className={"planet-small-ring-1"}
        alt={"planet"}
      />
      <img
        src={"planet/small_ring_2.svg"}
        className={"planet-small-ring-2"}
        alt={"planet"}
      />
      <img
        src={"planet/big_ring.svg"}
        className={"planet-big-ring"}
        alt={"planet"}
      />
      <img
        src={"planet/orange_line.svg"}
        className={"orange-line"}
        alt={"planet"}
      />
      {isClientArea ? (
        <img
          src={"/planet/dot.svg"}
          className={"planet-dot-top"}
          alt={"planet"}
        />
      ) : (
        <img
          src={"planet/planet_badge.svg"}
          className={"planet-badge"}
          alt={"planet"}
        />
      )}
      <img
        className={"planet-dot-center"}
        alt={"planet-dot"}
        src={"/planet/dot.svg"}
      />
      <img
        className={"planet-dot-bottom"}
        alt={"planet-dot"}
        src={"/planet/dot.svg"}
      />
    </>
  );
};
