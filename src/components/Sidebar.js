import { Collapse } from "antd";
import range from "../functions/range";
import Category from "./sidebar/Category";
import Resizer from "./sidebar/Resizer";

const Sidebar = () => {
  const { Panel } = Collapse;
  const categories = range(1, 2);

  return (
    <aside>
      <Collapse>
        {categories.map((index) => {
          return (
            <Panel header={`Category ${index}`} key={index}>
              <Resizer children={<Category />} />
            </Panel>
          );
        })}
      </Collapse>
    </aside>
  );
};

export default Sidebar;
