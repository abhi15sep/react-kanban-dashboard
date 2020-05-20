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
} from "react-bootstrap";
import { Paper } from "@material-ui/core";

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
    };
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

  // This function change the tasks from todo list to doing list.
  todo_to_doing(item) {
    var todo = this.state.todo;
    var doing = this.state.doing;
    var temp = todo[item];
    delete todo[item];
    doing[item] = temp;
    this.setState({ todo: todo, doing: doing });
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

  // This is the render function
  render() {
    return (
      <div className="App">
        {/* ----------------------------------------------Navbar-------------------------------------------- */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className="ml-auto mr-auto" align="center">
            <h4 className="main-heading">Kanban Dashboard</h4>
          </Navbar.Brand>
        </Navbar>

        {/* ----------------------------------------------Container-------------------------------------------- */}
        <Container className="board" fluid>
          {/* ---------------------Add Task Button------------------- */}
          <Row>
            <Col align="center">
              <Button onClick={() => this.setState({ showModal: true })}>
                <i class="fas fa-plus"></i> Add Task
              </Button>
            </Col>
          </Row>

          {/* ---------------------Task Lists------------------- */}
          <Row className="board">
            {/* ---------------------TO DO List------------------- */}
            <Col>
              <Paper elevation={3} className="paper">
                <h4 align="center">To Do</h4>
                {Object.keys(this.state.todo).length === 0 ? (
                  <Alert
                    variant="primary"
                    align="center"
                    style={{ marginTop: "50px" }}
                  >
                    Add a Task
                  </Alert>
                ) : (
                  Object.keys(this.state.todo).map((item) => (
                    <Card className="card" border="primary" bg="light">
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
                          onClick={() => {
                            var temp = this.state.todo;
                            delete temp[item];
                            this.setState({ todo: temp });
                          }}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Paper>
            </Col>

            {/* ---------------------Doing List------------------- */}
            <Col>
              <Paper elevation={3} className="paper">
                <h4 align="center">Doing</h4>
                {Object.keys(this.state.doing).length === 0 ? (
                  <Alert
                    variant="primary"
                    align="center"
                    style={{ marginTop: "50px" }}
                  >
                    Add a Task
                  </Alert>
                ) : (
                  Object.keys(this.state.doing).map((item) => (
                    <Card className="card" border="info" bg="light">
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
                          onClick={() => {
                            var temp = this.state.doing;
                            delete temp[item];
                            this.setState({ doing: temp });
                          }}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Paper>
            </Col>

            {/* ---------------------Done List------------------- */}
            <Col>
              <Paper elevation={3} className="paper">
                <h4 align="center">Done</h4>
                {Object.keys(this.state.done).length === 0 ? (
                  <Alert
                    variant="primary"
                    align="center"
                    style={{ marginTop: "50px" }}
                  >
                    Add a Task
                  </Alert>
                ) : (
                  Object.keys(this.state.done).map((item) => (
                    <Card className="card" border="success" bg="light">
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
                          className="float-right"
                          onClick={() => {
                            var temp = this.state.done;
                            delete temp[item];
                            this.setState({ done: temp });
                          }}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  ))
                )}
              </Paper>
            </Col>
          </Row>
        </Container>

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
              variant="secondary"
              onClick={() => this.setState({ showModal: false })}
            >
              Discard
            </Button>
            <Button
              variant="primary"
              onClick={() => this.addTask()}
              disabled={this.state.heading === "" ? true : false}
            >
              Add Task
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ---------------------Footer------------------- */}
        <Navbar bg="secondary" variant="dark" fixed="bottom" className="footer">
          <Navbar.Brand className="ml-auto mr-auto footer">
            Made by Gowtham
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default MainPage;
