import React, { Component } from "react";
import {
  Button,
  Navbar,
  Container,
  Row,
  Col,
  Card,
  Modal,
  Form,
  Alert,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Paper } from "@material-ui/core";
import "./style.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        1: {
          id: 1,
          heading: "Task 1",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      },
      doing: {
        2: {
          id: 2,
          heading: "Task 2",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      },
      done: {
        3: {
          id: 3,
          heading: "Task 3",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      },
      total: 3,
      showModal: false,
      heading: "",
      details: "",
      editModal: {},
      showEditModal: false,
      draggedCard: null,
      dragOn: false,
      autoSave: false,
      showSettings: false,
    };
  }

  autoSaveData() {
    if (this.state.autoSave) {
      window.localStorage.setItem("todo", JSON.stringify(this.state.todo));
      window.localStorage.setItem("doing", JSON.stringify(this.state.doing));
      window.localStorage.setItem("done", JSON.stringify(this.state.done));
    }
    window.localStorage.setItem("auto_save", this.state.autoSave);
  }
  saveData() {
    window.localStorage.setItem("todo", JSON.stringify(this.state.todo));
    window.localStorage.setItem("doing", JSON.stringify(this.state.doing));
    window.localStorage.setItem("done", JSON.stringify(this.state.done));
    this.setState({ showSettings: false });
  }

  componentDidMount() {
    if (window.localStorage.getItem("user_status") === null) {
      window.localStorage.setItem("user_status", "existing");
      window.localStorage.setItem("todo", JSON.stringify(this.state.todo));
      window.localStorage.setItem("doing", JSON.stringify(this.state.doing));
      window.localStorage.setItem("done", JSON.stringify(this.state.done));
      window.localStorage.setItem("auto_save", false);
    } else {
      this.setState({
        autoSave:
          window.localStorage.getItem("auto_save") === "true" ? true : false,
        todo: JSON.parse(window.localStorage.getItem("todo")),
        doing: JSON.parse(window.localStorage.getItem("doing")),
        done: JSON.parse(window.localStorage.getItem("done")),
      });
    }
    setInterval(() => {
      this.autoSaveData();
    }, 1000);
  }

  // This function is used to add a new task
  addTask() {
    var temp = this.state.todo;
    var n = this.state.total;
    n = n + 1;
    temp[n] = {
      id: `${n}`,
      heading: `${this.state.heading}`,
      details: `${this.state.details}`,
    };
    this.setState({
      todo: temp,
      total: n,
      showModal: false,
    });
  }

  editTask(item) {
    var temp;
    if (item in this.state.todo) {
      temp = this.state.todo[item];
    } else if (item in this.state.doing) {
      temp = this.state.doing[item];
    } else {
      temp = this.state.done[item];
    }
    this.setState({
      showEditModal: true,
      editModal: temp,
      heading: temp["heading"],
      details: temp["details"],
    });
  }

  saveEditTask() {
    var temp = this.state.editModal;
    temp["heading"] = this.state.heading;
    temp["details"] = this.state.details;
    var master;
    if (temp["id"] in this.state.todo) {
      master = this.state.todo;
      master[temp["id"]] = temp;
      this.setState({ todo: master });
    } else if (temp["id"] in this.state.doing) {
      master = this.state.doing;
      master[temp["id"]] = temp;
      this.setState({ doing: master });
    } else {
      master = this.state.done;
      master[temp["id"]] = temp;
      this.setState({ done: master });
    }
    this.setState({ showEditModal: false });
  }

  // This function change the tasks from todo list to doing list.
  todo_to_doing(item) {
    var todo = this.state.todo;
    var doing = this.state.doing;
    var temp = todo[item];
    delete todo[item];
    doing[item] = temp;
    this.setState({ todo: todo, doing: doing });
  }

  todo_to_done(item) {
    var todo = this.state.todo;
    var done = this.state.done;
    var temp = todo[item];
    delete todo[item];
    done[item] = temp;
    this.setState({ todo: todo, done: done });
  }

  // This function change the tasks from doing list to todo list.
  doing_to_todo(item) {
    var todo = this.state.todo;
    var doing = this.state.doing;
    var temp = doing[item];
    delete doing[item];
    todo[item] = temp;
    this.setState({ todo: todo, doing: doing });
  }

  // This function change the tasks from doing list to done list.
  doing_to_done(item) {
    var doing = this.state.doing;
    var done = this.state.done;
    var temp = doing[item];
    delete doing[item];
    done[item] = temp;
    this.setState({ doing: doing, done: done });
  }

  // This function change the tasks from done list to doing list.
  done_to_doing(item) {
    var done = this.state.done;
    var doing = this.state.doing;
    var temp = done[item];
    delete done[item];
    doing[item] = temp;
    this.setState({ done: done, doing: doing });
  }

  done_to_todo(item) {
    var done = this.state.done;
    var todo = this.state.todo;
    var temp = done[item];
    delete done[item];
    todo[item] = temp;
    this.setState({ done: done, todo: todo });
  }

  dragStart(e, item) {
    this.setState({ draggedCard: item });
  }

  dragEnd(e) {
    this.setState({ draggedCard: null });
  }

  dragOver(e) {
    e.preventDefault();
  }

  dropCard(e, item) {
    let card_id = this.state.draggedCard;
    let fromList,
      toList = item;
    if (card_id in this.state.todo) fromList = 1;
    else if (card_id in this.state.doing) fromList = 2;
    else fromList = 3;
    this.setState({ draggedCard: null });
    if (fromList === 1) {
      if (toList === 2) this.todo_to_doing(card_id);
      else if (toList === 3) this.todo_to_done(card_id);
    } else if (fromList === 2) {
      if (toList === 1) this.doing_to_todo(card_id);
      else if (toList === 3) this.doing_to_done(card_id);
    } else if (fromList === 3) {
      if (toList === 2) this.done_to_doing(card_id);
      else if (toList === 1) this.done_to_todo(card_id);
    }
  }

  // This is the render function
  render() {
    return (
      <div className="App">
        {/* ----------------------------------------------Navbar-------------------------------------------- */}
        <Navbar bg="dark" variant="dark">
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip>Know about Kanban</Tooltip>}
          >
            <a
              href="https://www.digite.com/kanban/what-is-kanban/"
              target="__blank"
              style={{ marginLeft: "15px" }}
            >
              <i class="fab fa-jira fa-2x jira-icon"></i>
            </a>
          </OverlayTrigger>
          <Navbar.Brand className="ml-auto mr-auto" align="center">
            <h4 className="main-heading">Kanban Dashboard</h4>
          </Navbar.Brand>
          <OverlayTrigger
            placement="left"
            overlay={<Tooltip>View Source Code</Tooltip>}
          >
            <a
              href="https://github.com/gowthamparuchuru/react-kanban-dashboard"
              target="__blank"
              style={{ marginRight: "15px" }}
            >
              <i class="fab fa-github fa-2x github-icon"></i>
            </a>
          </OverlayTrigger>
        </Navbar>

        {/* ----------------------------------------------Container-------------------------------------------- */}
        <Container className="board" fluid>
          {/* ---------------------Add Task Button------------------- */}
          <Row>
            <Col></Col>
            <Col align="center">
              <Button
                onClick={() => this.setState({ showModal: true })}
                variant="info"
              >
                <i class="fas fa-plus-circle  mr-2"></i>Add Task
              </Button>

              {/* <Button
                variant="danger"
                className="float-right"
                onClick={() => {
                  if (window.confirm("Are you sure to reset?"))
                    this.setState({ todo: {}, doing: {}, done: {} });
                }}
              >
                Reset
              </Button>
              <span className="float-right mr-2 mt-1">
                <BootstrapSwitchButton
                  checked={this.state.autoSave}
                  onstyle="success"
                  offstyle="danger"
                  size="sm"
                  onChange={() => {
                    this.setState({ autoSave: !this.state.autoSave });
                  }}
                />
              </span> */}
            </Col>
            <Col>
              <Button
                variant="outline-dark"
                className="float-right mr-4"
                onClick={() => this.setState({ showSettings: true })}
              >
                Settings<i class="fas fa-cog  settings-icon ml-2"></i>
              </Button>
            </Col>
          </Row>

          {/* ---------------------Task Lists------------------- */}
          <Row className="board">
            {/* ---------------------TO DO List------------------- */}
            <Col>
              <span className="list">
                <Paper
                  elevation={5}
                  className="paper-list"
                  style={{ borderRadius: "3%" }}
                  onDragOver={(e) => this.dragOver(e)}
                  onDrop={(e) => this.dropCard(e, 1)}
                >
                  <Alert variant="primary" style={{ padding: "5px" }}>
                    <h4 align="center" style={{ marginBottom: "0px" }}>
                      To Do
                    </h4>
                  </Alert>
                  {Object.keys(this.state.todo).length === 0 ? (
                    <Alert
                      variant="danger"
                      align="center"
                      style={{ marginTop: "50px" }}
                    >
                      Add a Task
                    </Alert>
                  ) : (
                    Object.keys(this.state.todo).map((item) => (
                      <Card
                        id={item}
                        className="task-card"
                        border="primary"
                        bg="light"
                        draggable="true"
                        onDragStart={(e) => this.dragStart(e, item)}
                        onDragEnd={(e) => this.dragEnd(e)}
                        style={{
                          opacity: this.state.draggedCard === item ? 0.2 : 1,
                        }}
                      >
                        <Card.Header as="h5" align="center">
                          {" "}
                          {this.state.todo[item]["heading"]}
                          <Button
                            size="sm"
                            className="float-right"
                            onClick={() => {
                              this.todo_to_doing(item);
                            }}
                          >
                            <i class="fas fa-angle-right"></i>
                          </Button>
                        </Card.Header>
                        <Card.Body className="card-body">
                          <Card.Text>
                            {this.state.todo[item]["details"]}
                          </Card.Text>

                          <Button
                            size="sm"
                            variant="outline-danger"
                            className="float-right"
                            style={{ borderRadius: "70%" }}
                            onClick={() => {
                              var temp = this.state.todo;
                              delete temp[item];
                              this.setState({ todo: temp });
                            }}
                          >
                            <i class="far fa-trash-alt"></i>
                          </Button>
                          <Button
                            className="float-right mr-2"
                            style={{ borderRadius: "70%" }}
                            variant="outline-info"
                            size="sm"
                            onClick={() => this.editTask(item)}
                          >
                            <i class="fas fa-pen"></i>
                          </Button>
                        </Card.Body>
                      </Card>
                    ))
                  )}
                </Paper>
              </span>
            </Col>

            {/* ---------------------Doing List------------------- */}
            <Col>
              <span className="list">
                <Paper
                  elevation={5}
                  className="paper-list"
                  style={{ borderRadius: "3%" }}
                  onDragOver={(e) => this.dragOver(e)}
                  onDrop={(e) => this.dropCard(e, 2)}
                >
                  <Alert variant="info" style={{ padding: "5px" }}>
                    <h4 align="center" style={{ marginBottom: "0" }}>
                      Doing
                    </h4>
                  </Alert>
                  {Object.keys(this.state.doing).length === 0 ? (
                    <Alert
                      variant="danger"
                      align="center"
                      style={{ marginTop: "50px" }}
                    >
                      Add a Task
                    </Alert>
                  ) : (
                    Object.keys(this.state.doing).map((item) => (
                      <Card
                        id={item}
                        className="task-card"
                        border="info"
                        bg="light"
                        draggable="true"
                        onDragStart={(e) => this.dragStart(e, item)}
                        onDragEnd={(e) => this.dragEnd(e)}
                        style={{
                          opacity: this.state.draggedCard === item ? 0.2 : 1,
                        }}
                      >
                        <Card.Header as="h5" align="center">
                          <Button
                            size="sm"
                            className="float-left"
                            onClick={() => {
                              this.doing_to_todo(item);
                            }}
                          >
                            <i class="fas fa-angle-left"></i>
                          </Button>{" "}
                          {this.state.doing[item]["heading"]}
                          <Button
                            size="sm"
                            className="float-right"
                            onClick={() => this.doing_to_done(item)}
                          >
                            <i class="fas fa-angle-right"></i>
                          </Button>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {this.state.doing[item]["details"]}
                          </Card.Text>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            className="float-right"
                            style={{ borderRadius: "70%" }}
                            onClick={() => {
                              var temp = this.state.doing;
                              delete temp[item];
                              this.setState({ doing: temp });
                            }}
                          >
                            <i class="far fa-trash-alt"></i>
                          </Button>
                          <Button
                            className="float-right mr-2"
                            style={{ borderRadius: "70%" }}
                            variant="outline-info"
                            size="sm"
                            onClick={() => this.editTask(item)}
                          >
                            <i class="fas fa-pen"></i>
                          </Button>
                        </Card.Body>
                      </Card>
                    ))
                  )}
                </Paper>
              </span>
            </Col>

            {/* ---------------------Done List------------------- */}
            <Col>
              <span className="list">
                <Paper
                  elevation={5}
                  className="paper-list"
                  style={{ borderRadius: "3%" }}
                  onDragOver={(e) => this.dragOver(e)}
                  onDrop={(e) => this.dropCard(e, 3)}
                >
                  <Alert variant="success" style={{ padding: "5px" }}>
                    <h4 align="center" style={{ marginBottom: "0" }}>
                      Done
                    </h4>
                  </Alert>
                  {Object.keys(this.state.done).length === 0 ? (
                    <Alert
                      variant="danger"
                      align="center"
                      style={{ marginTop: "50px" }}
                    >
                      Add a Task
                    </Alert>
                  ) : (
                    Object.keys(this.state.done).map((item) => (
                      <Card
                        id={item}
                        className="task-card"
                        border="success"
                        bg="light"
                        draggable="true"
                        onDragStart={(e) => this.dragStart(e, item)}
                        onDragEnd={(e) => this.dragEnd(e)}
                        style={{
                          opacity: this.state.draggedCard === item ? 0.2 : 1,
                        }}
                      >
                        <Card.Header as="h5" align="center">
                          <Button
                            size="sm"
                            className="float-left"
                            onClick={() => this.done_to_doing(item)}
                          >
                            <i class="fas fa-angle-left"></i>
                          </Button>{" "}
                          {this.state.done[item]["heading"]}
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {this.state.done[item]["details"]}
                          </Card.Text>
                          <Button
                            size="sm"
                            variant="outline-danger"
                            style={{ borderRadius: "70%" }}
                            className="float-right"
                            onClick={() => {
                              var temp = this.state.done;
                              delete temp[item];
                              this.setState({ done: temp });
                            }}
                          >
                            <i class="far fa-trash-alt"></i>
                          </Button>
                          <Button
                            className="float-right mr-2"
                            style={{ borderRadius: "70%" }}
                            variant="outline-info"
                            size="sm"
                            onClick={() => this.editTask(item)}
                          >
                            <i class="fas fa-pen"></i>
                          </Button>
                        </Card.Body>
                      </Card>
                    ))
                  )}
                </Paper>
              </span>
            </Col>
          </Row>
        </Container>

        {/* ---------------------Pop Up Modal for Editing a task details------------------- */}
        <Modal
          size="md"
          centered
          show={this.state.showEditModal}
          onHide={() => this.setState({ showEditModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => this.setState({ heading: e.target.value })}
                  value={this.state.heading}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Details :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={(e) => this.setState({ details: e.target.value })}
                  value={this.state.details}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              block
              variant="primary"
              onClick={() => this.saveEditTask()}
              disabled={this.state.heading === "" ? true : false}
            >
              Save Edits
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ---------------------Pop Up Modal for adding new task details------------------- */}
        <Modal
          size="md"
          centered
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Enter Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => this.setState({ heading: e.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Details :</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  onChange={(e) => this.setState({ details: e.target.value })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              block
              variant="primary"
              onClick={() => this.addTask()}
              disabled={this.state.heading === "" ? true : false}
            >
              Add Task
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showSettings}
          onHide={() => this.setState({ showSettings: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col>
                  <p className="float-right mr-3">Auto Save :</p>
                </Col>
                <Col>
                  <span className="float-left ml-3">
                    <BootstrapSwitchButton
                      checked={this.state.autoSave}
                      onstyle="success"
                      offstyle="danger"
                      size="sm"
                      onChange={() => {
                        this.setState({ autoSave: !this.state.autoSave });
                      }}
                    />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col className="text-center mt-3">
                  <Button
                    variant="success"
                    disabled={this.state.autoSave ? true : false}
                    onClick={() => {
                      this.saveData();
                    }}
                  >
                    <i class="fas fa-save mr-2"></i>Save Chart
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="text-center mt-3 mb-3">
                  <Button
                    variant="danger"
                    onClick={() => {
                      this.setState({ showSettings: false });
                      setTimeout(function () {
                        if (window.confirm("Are you sure to reset?"))
                          this.setState({
                            todo: {},
                            doing: {},
                            done: {},
                          });
                      }, 100);
                    }}
                  >
                    <i class="fas fa-broom mr-2"></i>Reset Chart
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        {/* ---------------------Footer------------------- */}
        <Navbar
          variant="flat"
          fixed="bottom"
          className="footer"
          style={{ backgroundColor: "#e8e4e1" }}
        >
          <Navbar.Brand className="ml-auto mr-auto footer">
            <a
              className="footer-link"
              href="https://gowthamparuchuru.github.io/my-portfolio/"
              target="__blank"
            >
              Gowtham
            </a>{" "}
            <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              ©
            </span>{" "}
            {new Date().getFullYear()}
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default MainPage;
