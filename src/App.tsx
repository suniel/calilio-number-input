import PhoneInput from "react-phone-input-2";
import "./App.css";
import "./calilio-input.css";

function App() {
  return (
    <div
      style={{
        width: "332px",
        display: "flex",
        flexDirection: "column",
        padding: "0 24px",
        background: "#fafafa",
        borderRadius: "24px",
      }}
    >
      <PhoneInput country={"bd"} />
      <div className="line-sep" style={{ borderTop: "1px solid #f1eeee" }}>
        <PhoneInput country={"bd"} />
      </div>
    </div>
  );
}

export default App;
