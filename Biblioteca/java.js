let nomes = ['a@a.com','Rafa@gmail.com','Murilo@gmail.com','Paulo@gmail.com'];
let senhas = ['a','peruibe1','Zeus34AFr','Chacal'];

function entrar(){
    let nome = document.querySelector('#nome001').value;
    let senha = document.querySelector('#senha001').value;
    for(let i = 0; i<nomes.length; i++){
        if(nome == nomes[i] && senha == senhas[i]){
            window.location = 'pageInicial.html';
        }
    };
};

function drop(bt, id, fun, body){
        var res = 0;
        let drop = document.querySelector(id);
        if(fun==0){
            res=1;
            drop.style.display = 'flex';
        }else{
         drop.style.display = 'none';
        }
        let onclick = "drop(this,'"+id+"',"+res+",'"+body+"')";
        bt.setAttribute('onclick', onclick);
        
}
