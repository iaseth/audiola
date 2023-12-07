

export const WAVEFORM_TYPES = [
	{name: "sine", "icon": ""},
	{name: "square", "icon": ""},
	{name: "sawtooth", "icon": ""},
	{name: "triangle", "icon": ""},
	{name: "custom", "icon": ""}
];

export const audioContext = new AudioContext();
const mainGainNode = audioContext.createGain();
mainGainNode.connect(audioContext.destination);

export function playTone (freq: number) {
	const osc = audioContext.createOscillator();
	osc.connect(mainGainNode);

	const type = "sawtooth";
	osc.type = type;

	osc.frequency.value = freq;
	osc.start();
	setTimeout(() => osc.stop(), 1000);

	return osc;
}
