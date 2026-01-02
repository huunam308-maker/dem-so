function Display(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Đếm số</h2>
      <p>Giá trị count hiện tại là: <b>{props.count}</b></p>
    </div>
  );
}

export default Display;
