const input = require('./input.json');

const coords = [];
input.forEach((row, y) => {
	row.split('').forEach((letter, x) => {
		if (!coords[x]) coords[x] = [];
		coords[x][y] = letter;
	});
});

let trees = 0;
let x = 0;
const slopes = [
	[1, 1],
	[3, 1],
	[5, 1],
	[7, 1],
	[1, 2]
];

/*for (let y = 0; y < coords[0].length; y++) {
	if (x >= coords.length) x -= coords.length;
	if (coords[x][y] === '#') trees++;

	x += slopes[0];
}*/

const total = slopes.reduce((acc, slope) => {
	let trees = 0;
	let y = 0;
	let x = 0;

	// Loop until Y reaches end of input
	while (y < coords[0].length) {
		if (x >= coords.length) x -= coords.length;
		if (coords[x][y] === '#') trees++;

		x += slope[0];
		y += slope[1];
	}
	return acc * trees;
}, 1);
console.log(trees); console.log('Part 2:', total);