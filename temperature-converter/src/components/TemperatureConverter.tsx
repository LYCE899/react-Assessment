import React, { ChangeEvent } from "react";

interface TemperatureConverterState {
  temperature: number;
  unit: "Celsius" | "Fahrenheit";
}

class TemperatureConverter extends React.Component<{}, TemperatureConverterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      temperature: 0,
      unit: "Celsius",
    };
  }

  handleTemperatureChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ temperature: parseFloat(event.target.value) || 0 });
  };

  toggleUnit = () => {
    const { temperature, unit } = this.state;
    const newUnit = unit === "Celsius" ? "Fahrenheit" : "Celsius";
    const convertedTemperature =
      unit === "Celsius"
        ? (temperature * 9) / 5 + 32
        : ((temperature - 32) * 5) / 9;

    this.setState({
      temperature: parseFloat(convertedTemperature.toFixed(2)),
      unit: newUnit,
    });
  };

  render() {
    const { temperature, unit } = this.state;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Temperature Converter</h1>
        <input
          type="number"
          value={temperature}
          onChange={this.handleTemperatureChange}
          style={{ padding: "5px", margin: "10px" }}
        />
        <button onClick={this.toggleUnit} style={{ padding: "5px 10px" }}>
          Convert to {unit === "Celsius" ? "Fahrenheit" : "Celsius"}
        </button>
        <p>
          The temperature is {temperature}° {unit}.
        </p>
      </div>
    );
  }
}

export default TemperatureConverter;
function parseFloat(arg0: any) {
  throw new Error("Function not implemented.");
}

