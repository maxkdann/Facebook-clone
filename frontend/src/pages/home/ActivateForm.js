import React from "react";
import PropogateLoader from "react-spinners/PropagateLoader";
export default function ActivateForm({ type, header, text, loading }) {
  return (
    <div className="blur">
      <div className="popup">
        <div
          className={`popup_header ${
            type === "success" ? "sucess_text" : "error_text"
          }`}
        >
          {header}
        </div>
        <div className="popup_message">{text}</div>
        <PropogateLoader color="#1876f2" size={30} loading={loading} />
      </div>
    </div>
  );
}
