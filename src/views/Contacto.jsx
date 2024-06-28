import {Form, Button} from "react-bootstrap"

const Contacto = () => {
  return (
    <section className="d-flex flex-column align-items-center">
        <h1 className="mt-5">¿Comó podemos ayudarte?</h1>
        <Form>
            <Form.Group className="text-center mt-3">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="name@example.com"></Form.Control>
            </Form.Group>

            <Form.Group className="text-center mt-3">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control
                    as="textarea"
                    style={{height: '100px'}}>
                    </Form.Control>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <button variant="danger" type="submit">
                    Enviar
                </button>
            </Form.Group>
        </Form>
    </section>
  )
}

export default Contacto