$(document).ready(function(){
	var gen2 = prompt('how many generations would you like to simulate?\nmust be a whole number');
	//turns gen (string) into an integer
	var gen = +gen2;
	//keeps track of spread
	var x = [1];
	//array starts on zero, for math we need it to start on 1
	var y = gen + 1;
	//keeps track of loop repeats
	var i = 0;

	//add arrays to add points to the svg line
	var lx = [];
	var ly = [];
	var points = [];

	while(i < y){
		//adds another value to x, keeping track of generations and who is infected
		x.push(x[i] * 2.3);
		var cases = x[i];

		//add values to the arrays
		lx.push(i);
//		console.out.print(lx);
		ly.push(cases - 1);
//		console.println(ly);

		//add a modifier to translate x & y to y x,
		points.push(ly[i] + ' ' + lx[i]);
//		console.write(points);

		//on geneeration <gen>, ...
		document.getElementById("output1").innerHTML = gen;
		document.getElementById("comma").innerHTML = ', ';

		i++;
	}

	//keeps the output as an integer
//	cases = cases.split('.').pop();

	//keeps the output simple for really large numbers
	if(cases <= 7700000000){
		document.getElementById("output2").innerHTML = cases;
	}
	else{
		document.getElementById("output2").innerHTML = 'all';
	}

	//draws graph
	var line = document.createElement('polyline');
	line.points = points;
	line.style = 'stroke:red;stroke-width:4;';
	document.getElementById('graph').appendChild(line);
});
