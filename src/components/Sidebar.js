import { Collapse } from "antd";
import { Resizable } from "re-resizable";
import Category from "./sidebar/Category";

const Sidebar = () => {
  const { Panel } = Collapse;

  return (
    <aside>
      <Collapse>
        <Panel header="Category 1" key="category_1">
          <Resizable
            defaultSize={{
              width: "100%",
              height: "277",
            }}
            enable={{
              bottom: true,
            }}
            style={{ overflowX: "hidden", overflowY: "auto" }}
          >
            <Category />
          </Resizable>
        </Panel>
        <Panel header="Category 2" key="category_2">
          <Category />
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
