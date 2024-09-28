import { Planet } from "../../components/widgets/Planet.tsx";
import { NameEmailComponent } from "../../components/widgets/NameEmailComponent.tsx";
import { Navigate, useLocation } from "react-router-dom";

const UserInfoView = () => {
  const location = useLocation();

  if (!location.state) {
    return <Navigate to={"/"} />;
  }

  return (
    <main>
      <section>
        <h1 className={"clientarea-title"}>PErsonal data</h1>
        <div className={"clientarea-info-container"}>
          <NameEmailComponent
            email={location.state.email}
            name={location.state.name}
          />
          <div>
            <label className={"clientarea-label"}>Wallet</label>
            <p className={"clientarea-data-text"}>{location.state.wallet}</p>
          </div>
        </div>
        <div className="relative animate-fly-in">
          <Planet isClientArea={true} />
        </div>
      </section>
    </main>
  );
};

export default UserInfoView;
