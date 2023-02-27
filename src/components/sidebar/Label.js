const Label = ({ icon, name }) => {
  return (
    <>
      {icon}
      <span>{" " + name}</span>
    </>
  );
};

export default Label;
