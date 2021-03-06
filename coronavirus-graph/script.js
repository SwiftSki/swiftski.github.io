function drawGraph(){
	var gen = +document.getElementById("gen").value;
	//keeps track of spread
	var x = [1];
	//array starts on zero, for math we need it to start on 1
	var y = gen + 1;
	//keeps track of loop repeats
	var i = 0;

	//add arrays to add points to the svg line
	var lx = [];
	var ly = [];

	//canvas stuff
	var ctx = document.getElementById("graph").getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = "3";
	ctx.strokeStyle = "red";
	ctx.moveTo(0, document.getElementById('graph').height);

	//for scaling
	if(document.getElementById('graph').height - 2.3 ** gen < -1){
		while(document.getElementById('graph').height - 2.3 ** gen < -1){
			document.getElementById('graph').height++;
			console.log(2.3 ** gen, document.getElementById('graph').height, document.getElementById('graph').height - 2.3 ** gen);
		}
		drawGraph();
	}

	else{
		while(i < y){
			//adds another value to x, keeping track of generations and who is infected
			x.push(x[i] * 2.3);
			var cases = x[i];

			//add values to the arrays
			lx.push(i);
//			console.log(lx);
			ly.push(cases - 1);
//			console.log(ly);

			//make variables to properly scale x & y
			var slx = lx[i] * 10;
			var sly = document.getElementById('graph').height - ly[i];
			console.log(ly[i], document.getElementById('graph').height - ly[i]);

			//on geneeration <gen>, ...
			document.getElementById("output1").innerHTML = gen;
			document.getElementById("comma").innerHTML = ', ';

			//add the next segment to the line
			ctx.lineTo(slx, sly);

			i++;
		}
	}
	//keeps the output as an integer
	cases = cases.toString();
	cases = cases.split('.').shift();

	//keeps the output simple for really large numbers
	if(cases <= 7700000000){
		document.getElementById("output2").innerHTML = cases;
	}
	else{
		document.getElementById("output2").innerHTML = 'all';
	}

	//draws graph
	ctx.stroke();
}
