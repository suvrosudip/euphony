
function updateSource(song){ 
	var player = document.getElementById('player');
    var source = document.getElementById('src1');
	source.src = document.getElementById(song).getAttribute('data-value');
	//alert(source.src);
	player.load();
	player.play();
	//document.getElementById('source_change').data-value=document.getElementById(song).getAttribute('data-value');
	
	
		
}

function pause() {
	player.pause();
}

function play() {
	player.play();
}



