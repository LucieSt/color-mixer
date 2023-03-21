import React, { useState } from "react";
import './style.css';

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {

	const [value, setValue] = useState(0);

	let colorClass = `slider slider--${baseColor}`;
	let sliderId = `${baseColor}Slider`;

	const handleChange = (e) => {
		setValue(e.target.value);
		onValueChange(e.target.value);
	};

	return (
		<>
			<label htmlFor={baseColor}>{colorName}</label>
			<input
				type="range"
				className={colorClass}
				id={sliderId}
				min="0"
				max="255"
				value={value}
				onChange={handleChange}
			/>
		</>
	)
};

export default ColorSlider;