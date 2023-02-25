import { Collapse } from "antd";
import { TreeView, TreeItem } from "@mui/lab";
import range from "../functions/range";

const Sidebar = () => {
  const { Panel } = Collapse;
  const files = range(1, 10);

  return (
    <aside>
      <Collapse>
        <Panel header="Category 1" key="category_1">
          <TreeView>
            <TreeItem nodeId="Folder 1" label="Folder 1"></TreeItem>
            <TreeItem nodeId="Folder 2" label="Folder 2">
              {files.map((num) => (
                <TreeItem
                  key={num}
                  nodeId={`File ${num}`}
                  label={`File ${num}`}
                ></TreeItem>
              ))}
            </TreeItem>
          </TreeView>
        </Panel>
        <Panel header="Category 2" key="category_2">
          <TreeView>
            <TreeItem nodeId="Folder 1" label="Folder 1"></TreeItem>
            <TreeItem nodeId="Folder 2" label="Folder 2">
              {files.map((num) => (
                <TreeItem
                  key={num}
                  nodeId={`File ${num}`}
                  label={`File ${num}`}
                ></TreeItem>
              ))}
            </TreeItem>
          </TreeView>
        </Panel>
      </Collapse>
    </aside>
  );
};

export default Sidebar;
