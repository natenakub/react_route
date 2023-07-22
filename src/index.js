import React, { useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import Contact from "./contact";
import { userContext } from "./context";

function MyLink(props) {
  return (
    <NavLink
      className="link px-2 text-white"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

function Courses() {
  const table = useRef();
  const tr = useRef([]);

  const data = [
    ["JavaScript", 1000],
    ["React", 1500],
    ["DjangGO", 2000],
    ["Flutter", 2500],
  ];

  const DeleteRow = (i) => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  };

  return (
    <div>
      <Menu></Menu>
      <h3>My Courses</h3>
      <Table striped bordered hover className="my-3" ref={table}>
        <thead>
          <tr>
            <th>Course</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr ref={(el) => (tr.current[i] = el)} key={i}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => DeleteRow(i)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export function Menu() {
  let user = useContext(userContext);
  return (
    <nav className="bg-secondary p-2 mb-3 text-center">
      <MyLink path="/" linkName="Main"></MyLink>
      <MyLink path="/Courses" linkName="Courses"></MyLink>
      <MyLink path="/Contact" linkName="Contact Us"></MyLink>
      <span className="text-warning px-2">{user}</span>
    </nav>
  );
}

function Index() {
  const header1 = useRef();
  return (
    <div>
      <Menu />
      <h3 ref={header1}>Hello</h3>
      <Button onClick={() => (header1.current.innerHTML = "React")}>
        Click Me
      </Button>
    </div>
  );
}

function App() {
  return (
    <userContext.Provider value={"John Doe"}>
      <BrowserRouter>
        <Container className="p-3 my-3 bg-light">
          <Routes>
            <Route path="/" element={<Index></Index>}></Route>
            <Route path="/Main" element={<Index></Index>}></Route>
            <Route path="/Courses" element={<Courses></Courses>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </userContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
