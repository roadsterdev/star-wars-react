const Error = ({ errMsg }: { errMsg: string }) => {
  return (
    <div
      style={{
        margin: "auto",
        fontSize: "22px",
        fontWeight: "500",
        color: "#ca1614",
      }}
    >
      <p>{errMsg}</p>
    </div>
  );
};

export default Error;
