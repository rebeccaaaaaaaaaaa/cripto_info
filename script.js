// nossa api key 
var apikey = {
    key: '20788067-39e2-4eee-8456-8e71e5374c6e'
}

//vamos fazer o fetch
 //GET Fetch Requisition
    fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
        .then((response) => {
            if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
            return response.json();
            })
            .then((api) => {
                
                var texto = "";
                // Get 10 coins and symbols 
                // Fizemos um for para mostrar somente as 10 primeiras moedas
                for(let i = 0; i < 8; i++){

                //Show API information
                // tratamento para criar o HTML com os dados
                   texto = texto + `
                   <div class="col-lg-3 col-sm-6">
                    <div class="card">
                        <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                        <div class="media-body">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                        <p>${api.data[i].symbol}</p>
                        <p> ${api.data[i].first_historical_data} <p>
                        </div>
                            </div>
                    </div>
                    `;

                    document.getElementById("coins").innerHTML = texto;
                   
                    
                }
            })
            .catch((error) => {
                console.error(error.message);
            });
