import "./spinner_module.css";

function SpinnerCss() {
  return (
    <div className="">
      <h1 className="py-4">Loading</h1>
      <div className="loading">
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
        <div className="📦"></div>
      </div>
    </div>
  );
}

export default SpinnerCss;