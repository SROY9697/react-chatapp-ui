import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            type="text"
            placeholder="Type Something..."
            value={message}
            onChange={handleInputChange}
          />
        </Col>
        <Col xs={3} lg={4}>
          <img
            src="https://logodix.com/logo/2083252.png"
            alt=""
            style={{ height: "40px", cursor: "pointer" }}
          />

          <img
            src="https://as1.ftcdn.net/jpg/01/80/31/10/1000_F_180311099_Vlj8ufdHvec4onKSDLxxdrNiP6yX4PnP.jpg"
            alt=""
            style={{ height: "40px", cursor: "pointer", marginRight: "10px" }}
          />
          <input type="file" style={{ display: "none" }} id="file" />
          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
