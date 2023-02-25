import { Collapse } from "antd";
import Category from "./sidebar/Category";

const Sidebar = () => {
  const { Panel } = Collapse;

  return (
    <aside>
      <Collapse>
        <Panel header="Category 1" key="category_1">
          <Category />
        </Panel>
        <Panel header="Category 2" key="category_2">
          <Category />
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
