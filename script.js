//keeps track of toggling
var ct = 1;

function takevideo(){
	var video = document.createElement('video');
	video.setAttribute('playsinline', '');
	video.setAttribute('autoplay', '');
	video.setAttribute('muted', '');
	video.style.width = '200px';
	video.style.height = '200px';
	document.body.appendChild(video);

	/* Setting up the constraint */
	var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
	var constraints = {
		audio: false,
		video: {
			facingMode: facingMode
		}
	};

	/* Stream it to video element */
	navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
	video.srcObject = stream;
	});
}

function changeColor(){
	if(ct === 1){
		
	}
	if(ct === 0){
		
	}
}
