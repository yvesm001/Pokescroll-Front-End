import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function NewPokedexEntry() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Pokemon Name</Form.Label>
        <Form.Control type="email" placeholder="Name" />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label>Encounter Area</Form.Label>
        <Form.Select/>
      </Form.Group> */}

      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Caught?" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add New Entry
      </Button>
    </Form>
  );
}

export default NewPokedexEntry;
