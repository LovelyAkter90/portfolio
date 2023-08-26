function PrevArrow(prev) {
  const { className, style, onClick } = prev;
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
export default PrevArrow;
