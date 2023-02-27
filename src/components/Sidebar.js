import { Collapse } from "antd";
import Category from "./sidebar/Category";
import Resizer from "./sidebar/Resizer";

const Sidebar = () => {
  const { Panel } = Collapse;

  return (
    <aside>
      <Collapse>
        <Panel header="Category 1" key="category_1">
          <Resizer children={<Category />} />
        </Panel>
        <Panel header="Category 2" key="category_2">
          <Resizer children={<Category />} />
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
