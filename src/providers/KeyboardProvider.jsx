import React, { createContext, useContext, useRef, useState } from "react";
import { Slide, Box, useOutsideClick } from "@chakra-ui/react";
import Keyboard from "react-simple-keyboard";
import {
	KB_FN_Display,
	KB_KEY_THEME,
	KB_LAYOUT,
} from "@/src/components/Keyboard/keyboardconstant";
// * CSS
import "react-simple-keyboard/build/css/index.css";

export const keyboardContext = createContext({
	valueInput: "",
	language: "",
	layout: "",
	setOnInputChange: () => {
		console.log("Please provide setValue");
	},
	setLanguage: () => {
		console.log("Please provide setLanguage");
	},
	setLayout: () => {
		console.log("Please provide setLayout");
	},
	setFocused: () => {
		console.log("Please provide setIsFocused");
	},
});

export function KeyboardProvider({ children }) {
	const [isFocused, setIsFocused] = useState(true);
	const [valueInput, setValueInput] = useState("");
	const [language, setLanguage] = useState("th");
	const [layout, setLayout] = useState("th_default");
	const keyboardRef = useRef(null);
	const boxRef = useRef(null);

	// Chakra-ui Hook
	useOutsideClick({
		ref: boxRef,
		handler: () => {
			setIsFocused(false);
		},
	});

	const onChange = (input) => {
		setValueInput(input);
		// console.log("Input changed", input);
	};

	const handleShift = () => {
		const newLayoutName =
			layout === `${language}_default`
				? `${language}_shift`
				: `${language}_default`;
		setLayout(newLayoutName);
	};

	const handleLangSwitch = () => {
		const newLang = language == "th" ? "en" : "th";
		setLanguage(newLang);
		setLayout(`${newLang}_default`);
	};

	const handleNumpad = () => {
		const newLayoutName =
			layout === "lpr_default" || layout === "lpr_shift"
				? "numpad"
				: "lpr_default";
		setLayout(newLayoutName);
	};

	const onKeyPress = (button) => {
		if (button === "{shift}") handleShift();
		else if (button === "{th_lang}" || button === "{en_lang}")
			handleLangSwitch();
		else if (button === "{numpad}" || button === "{lpr}") handleNumpad();

		if (layout.includes("_shift")) setLayout(`${language}_default`);
	};

	const onChangeInput = (event) => {
		const input = event.target.value;
		setValueInput(input);
		keyboardRef.current.setInput(input);
	};

	return (
		<keyboardContext.Provider
			value={{
				valueInput: valueInput,
				language: language,
				layout: layout,
				setOnInputChange: onChangeInput,
				setLanguage: setLanguage,
				setLayout: setLayout,
				setFocused: setIsFocused,
			}}
		>
			{children}
			<Slide direction="bottom" in={isFocused} style={{ zIndex: 10 }}>
				<Box
					h="28vh"
					p="20px"
					color="white"
					mt="4"
					bg="#ececec"
					ref={boxRef}
				>
					<Keyboard
						keyboardRef={(r) => (keyboardRef.current = r)}
						onChange={onChange}
						onKeyPress={onKeyPress}
						layout={KB_LAYOUT}
						layoutName={layout}
						display={KB_FN_Display}
						buttonTheme={KB_KEY_THEME}
						theme={"hg-theme-default hg-layout-default kioskTheme"}
					/>
				</Box>
			</Slide>
		</keyboardContext.Provider>
	);
}

export function useKeyboard() {
	const context = useContext(keyboardContext);
	if (!context) {
		throw new Error("You need to wrap KeyboardProvider.");
	}
	return context;
}
