import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        sex: '',
        email: '',
        country: '',
        medicalHistory: '',
        weight: '',
        height: '',
        bloodGroup: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to the server or perform any other action
        console.log(formData);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h2 className="text-center">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="sex">
                            <Form.Label>Sex</Form.Label>
                            <Form.Control as="select" name="sex" value={formData.sex} onChange={handleChange}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="medicalHistory">
                            <Form.Label>Medical History</Form.Label>
                            <Form.Control as="textarea" rows={3} name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="weight">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="number" name="weight" value={formData.weight} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="height">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="number" name="height" value={formData.height} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="bloodGroup">
                            <Form.Label>Blood Group</Form.Label>
                            <Form.Control type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" block>
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;