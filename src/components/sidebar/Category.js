import { TreeView, TreeItem } from "@mui/lab";
import range from "../../functions/range";

const Category = () => {
  const files = range(1, 10);

  return (
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
  );
};

export default Category;
