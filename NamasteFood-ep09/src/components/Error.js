import { useRouteError } from "react-router-dom";

const spanStyle = {
  fontSize: "200px",
};
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <span style={spanStyle}>4</span>
        <span>
          <img
            src="https://as1.ftcdn.net/v2/jpg/01/21/30/26/1000_F_121302628_nt0FDhNk0ZbdUz9jNx5opYunsgxWBkRp.jpg"
            alt="catFace"
            height={200}
            width={210}
            style={{ borderRadius: "50%" }}
          ></img>
        </span>
        <span style={spanStyle}>4</span>
      </div>
      <h1>Oops! Page not found.</h1>
      <h2 style={{ color: "red" }}>{err.data}</h2>
    </div>
  );
};

export default Error;
