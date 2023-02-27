import { Resizable } from "re-resizable";

const Resizer = ({ children }) => {
  return (
    <Resizable
      defaultSize={{
        width: "100%",
        height: "277",
      }}
      enable={{
        bottom: true,
      }}
      handleStyles={{
        bottom: {
          bottom: "0px",
        },
      }}
      style={{ overflowX: "hidden", overflowY: "auto" }}
    >
      {children}
    </Resizable>
  );
};

export default Resizer;
