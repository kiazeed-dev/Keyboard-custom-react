import React, { useEffect } from "react";
import { Input } from "@chakra-ui/react";
import {
	KeyboardProvider,
	useKeyboard,
} from "@/src/providers/KeyboardProvider";

export default function Home() {
	const { valueInput, setOnInputChange, setFocused, setLayout, setLanguage } =
		useKeyboard();

	// * Setup keyboard layout
	// * Layout : th_default, en_default, lpr_default
	// * Language : th, en, lpr
	useEffect(() => {
		setLayout("lpr_default");
		setLanguage("lpr");
	}, []);

	return (
		<div className="App">
			<Input
				width={"100%"}
				height={"100px"}
				fontSize={"30px"}
				variant={"solid"}
				placeholder={"Tap on the virtual keyboard to start"}
				value={valueInput}
				onChange={setOnInputChange}
				onFocus={() => {
					setFocused(true);
				}}
			/>
		</div>
	);
}
