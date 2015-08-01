(function(){
    localStorage.user = JSON.stringify({name: 'Jony Fernando Schulz', email: 'email@email.com'});
    console.log(JSON.parse(localStorage.user)); //retorna no server em formato original=objeto
})();