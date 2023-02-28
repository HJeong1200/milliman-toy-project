import { TreeView, TreeItem } from "@mui/lab";
import range from "../../functions/range";
import { FolderFilled, FileFilled } from "@ant-design/icons";
import Label from "./Label";

const Category = () => {
  const files = range(1, 10);

  return (
    <TreeView>
      <TreeItem
        nodeId="Folder 1"
        label={<Label icon={<FolderFilled />} name="Folder 1" />}
      ></TreeItem>
      <TreeItem
        nodeId="Folder 2"
        label={<Label icon={<FolderFilled />} name="Folder 2" />}
      >
        {files.map((index) => (
          <TreeItem
            key={index}
            nodeId={`File ${index}`}
            label={<Label icon={<FileFilled />} name={`File ${index}`} />}
          />
        ))}
      </TreeItem>
    </TreeView>
  );
};

export default Category;
