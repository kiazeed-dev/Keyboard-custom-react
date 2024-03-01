const KB_LAYOUT = {
	th_default: [
		"\u0E45 \u002F \u002D \u0E20 \u0E16 \u0E38 \u0E36 \u0E04 \u0E15 \u0E08 \u0E02 \u0E0A",
		"\u0E46 \u0E44 \u0E33 \u0E1E \u0E30 \u0E31 \u0E35 \u0E23 \u0E19 \u0E22 \u0E1A \u0E25 \u0E03",
		"\u0E1F \u0E2B \u0E01 \u0E14 \u0E40 \u0E49 \u0E48 \u0E32 \u0E2A \u0E27 \u0E07",
		"\u0E1C \u0E1B \u0E41 \u0E2D \u0E34 \u0E37 \u0E17 \u0E21 \u0E43 \u0E1D",
		"{shift} {en_lang} {space} {bksp}",
	],
	th_shift: [
		"+ \u0E51 \u0E52 \u0E53 \u0E54 \u0E39 \u0E3F \u0E55 \u0E56 \u0E57 \u0E58 \u0E59",
		"\u0E50 \u0022 \u0E0E \u0E11 \u0E18 \u0E4D \u0E4A \u0E13 \u0E2F \u0E0D \u0E10 \u002C \u0E05",
		"\u0E24 \u0E06 \u0E0F \u0E42 \u0E0C \u0E47 \u0E4B \u0E29 \u0E28 \u0E0B \u002E",
		"( ) \u0E09 \u0E2E \u0E3A \u0E4C \u003F \u0E12 \u0E2C \u0E26",
		"{shift} {en_lang} {space} {bksp}",
	],
	en_default: [
		"1 2 3 4 5 6 7 8 9 0 - =",
		"q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; '",
		"z x c v b n m , . /",
		"{shift} {th_lang} {space} {bksp}",
	],
	en_shift: [
		"! @ # $ % ^ & * ( ) _ +",
		"Q W E R T Y U I O P { } |",
		'A S D F G H J K L : "',
		"Z X C V B N M < > ?",
		"{shift} {th_lang} {space} {bksp}",
	],
	lpr_default: [
		// "0 1 2 3 4 5 6 7 8 9",
		"\u0E20 \u0E16 \u0E04 \u0E15 \u0E08 \u0E02 \u0E0A",
		"\u0E1E \u0E23 \u0E19 \u0E22 \u0E1A \u0E25 \u0E03",
		"\u0E1F \u0E2B \u0E01 \u0E14 \u0E2A \u0E27 \u0E07",
		"\u0E1C \u0E1B \u0E2D \u0E17 \u0E21 \u0E1D",
		"{shift} {numpad} {space} {bksp}",
	],
	lpr_shift: [
		"\u0E0E \u0E11 \u0E18 \u0E13 \u0E0D \u0E10 \u0E05",
		"\u0E24 \u0E06 \u0E0F \u0E0C \u0E29 \u0E28 \u0E0B",
		"\u0E09 \u0E2E \u0E12 \u0E2C \u0E26",
		"{shift} {numpad} {space} {bksp}",
	],
	numpad: ["7 8 9", "4 5 6", "1 2 3", "{bksp} 0 {lpr}"],
};

const KB_FN_Display = {
	"{shift}": "Shift",
	"{bksp}": "←",
	"{enter}": "Enter",
	"{lock}": "Caps",
	"{th_lang}": "TH",
	"{en_lang}": "EN",
	"{space}": "Space Bar",
	"{numpad}": "123..",
	"{lpr}": "กขค..",
};

const KB_KEY_THEME = [
	{
		class: "func-key",
		buttons: "{shift} {bksp} {enter} {lock}",
	},
	{
		class: "func-key-lock",
		buttons: "{lock}",
	},
	{
		class: "func-key-shift",
		buttons: "{shift}",
	},
];

module.exports = {
	KB_LAYOUT,
	KB_FN_Display,
	KB_KEY_THEME,
};
