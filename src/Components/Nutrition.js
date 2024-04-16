import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Nutrition.css';


const Nutrition = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [gender, setGender] = useState("male");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        if (!weight || !height) {
            alert("Please enter weight and height");
            return;
        }

        const heightInMeters = height / 100;
        let bmiValue;

        if (gender === "male") {
            bmiValue = weight / (heightInMeters * heightInMeters);
        } else {
            bmiValue = 1.3 * weight / (heightInMeters * heightInMeters);
        }

        setBmi(bmiValue.toFixed(2));
    };

    const getBMIRating = () => {
        if (gender === "male") {
            if (bmi < 18.5) {
                return "Underweight";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                return "Normal weight";
            } else if (bmi >= 25 && bmi < 29.9) {
                return "Overweight";
            } else {
                return "Obese";
            }
        } else {
            if (bmi < 17.5) {
                return "Underweight";
            } else if (bmi >= 17.5 && bmi < 24.9) {
                return "Normal weight";
            } else if (bmi >= 25 && bmi < 29.9) {
                return "Overweight";
            } else {
                return "Obese";
            }
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">BMI Calculator</h1>
            <Form>
                <Form.Group controlId="formWeight">
                    <Form.Label>Weight (kg):</Form.Label>
                    <Form.Control
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formHeight">
                    <Form.Label>Height (cm):</Form.Label>
                    <Form.Control
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formGender">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={calculateBMI}>
                    Calculate BMI
                </Button>
            </Form>
            {bmi && (
                <div className="mt-4">
                    <h2>Your BMI: {bmi}</h2>
                    <h3>Review: {getBMIRating()}</h3>
                </div>
            )}
        </div>
    );
};

export default Nutrition;