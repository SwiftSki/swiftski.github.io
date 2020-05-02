function getCookie(cname) {
    var name = cname + "="; //Create the cookie name variable with cookie name concatenate with = sign
    var cArr = window.document.cookie.split(';'); //Create cookie array by split the cookie by ';'

    //Loop through the cookies and return the cooki value if it find the cookie name
    for(var i=0; i<cArr.length; i++) {
        var c = cArr[i].trim();
        //If the name is the cookie string at position 0, we found the cookie and return the cookie value
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }

    //If we get to this point, that means the cookie wasn't find in the look, we return an empty string.
    return "";
}
function deleteCookie(cname) {
    var d = new Date(); //Create an date object
    d.setTime(d.getTime() - (1000*60*60*24)); //Set the time to the past. 1000 milliseonds = 1 second
    var expires = "expires=" + d.toGMTString(); //Compose the expirartion date
    window.document.cookie = cname+"="+"; "+expires;//Set the cookie with name and the expiration date
}
function getUrl(){
    var target = window.location.search.split("?").pop();
    return target;
}
function makeUrl(url){
    window.open('https://fightmeadmin.netlify.com/content.html?' + url);
}

function password(code){
    var xp=document.createElement('div');
    xp.id='ohnoes';
    xp.innerHTML='oh noes';
    xp.style.position='fixed';
    xp.style.opacity='1';
    xp.style.top='0%';
    xp.style.left='0%';
    xp.style.height='100%';
    xp.style.width='100%';
    xp.style.background='blue';
    xp.style.zIndex=999;
    document.body.appendChild(xp);

    //for keeping poeple out
    var test = getCookie("test");
    if(test===code){
        x = code;
        document.getElementById('ohnoes').remove();
    }
    else{
        var str = prompt('password');
        var x = str.toLowerCase();
        if(x===code){
            document.getElementById('ohnoes').remove();
            window.document.cookie="test="+code;
        }
    }
}
var graph = {
	exponential : function (trgtId, growthfactor, gen){
		//keeps track of spread
		var x = [1];
		//array starts on zero, for math we need it to start on 1
		var y = gen + 1;
		//keeps track of loop repeats
		var i = 0;
		//makes interacting with the target easier
		var trgt = document.getElementById(trgtId);

		//add arrays to add points to the svg line
		var lx = [];
		var ly = [];

		//canvas stuff
		var ctx = trgt.getContext("2d");
		ctx.beginPath();
		ctx.lineWidth = "3";
		ctx.strokeStyle = "red";
		ctx.moveTo(0, trgt.height);

		while(i < y){
			//adds another value to x, keeping track of generations and who is infected
			x.push(x[i] * growthfactor);
			var cases = x[i];

			//add values to the arrays
			lx.push(i);
			ly.push(cases - 1);

			//make variables to properly scale x & y
			var slx = lx[i] * 10;
			var sly = trgt.height - ly[i];

			//add the next segment to the line
			ctx.lineTo(slx, sly);

			i++;
		}

		//keeps the output as an integer
		cases = cases.toString();
		cases = cases.split('.').shift();

		//draws graph
		ctx.stroke();
	},

	linear : function(trgtId, growth, gen){
		//canvas
		var trgt = document.getElementById(trgtId);

		//canvas stuff
                var ctx = trgt.getContext("2d");
                ctx.beginPath();
                ctx.lineWidth = "3";
                ctx.strokeStyle = "red";
                ctx.moveTo(0, trgt.height);

		//variables
		var x = [];
		var y = [];
		var i = 0;

		while(i <= gen){
			x.push(i * growth);
			y.push(i);

			//now draw
			ctx.lineTo(x[i] * 10, trgt.height - y[i] * 10);

			i++;
		}
		//draw line
		ctx.stroke();
	},

	pie : {
		trgtId : trgtId,
		ctx : document.getElementById(trgtId).getContext('2d'),
		begin : function(){
			ctx.beginPath();
			ctx.lineWidth = "3";
			ctx.strokeStyle = "red";
			ctx.moveTo(0, document.getElementById(trgtId).height);
		},
		addSlice : function(){},
		end : function(){}
	},

	points : function(){}

	//more graphing functions here
}
