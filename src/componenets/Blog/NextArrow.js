function NextArrow(next) {
  const { className, style, onClick } = next;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}
export default NextArrow;
