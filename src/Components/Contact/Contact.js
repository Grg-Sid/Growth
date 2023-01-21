import Form from "../Form/Form";
import Nav from "../Navbar/Nav";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="body">
        <div className="left">
          <img src="./Images/Rectangle 647.png" />
          <img src="./Images/Group 2689.png" />
        </div>
        <div className="right">
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Contact;
