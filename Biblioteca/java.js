window.onload = ()=>{
	mostrar(['#formB','#bnt1Aba','#formA','#bntAba'], 2);
}
function mostrar(ocu, chave){
	for (var i=0; i<ocu.length; i++){
		if (i<chave){
			ocultar(ocu[i], 0);	
		}else{
			ocultar(ocu[i], 1);
		};	
	};
};
function ocultar(obj, es) {
	let div = document.querySelector(obj);
	if(es==1){
		div.style.display = 'flex';
	}else{
		div.style.display = 'none';
	};
};