import { Collapse } from "antd";

const Sidebar = () => {
  const { Panel } = Collapse;

  return (
    <aside>
      <Collapse>
        <Panel header="Category 1" key="category_1"></Panel>
        <Panel header="Category 2" key="category_2"></Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
