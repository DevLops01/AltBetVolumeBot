const stocks = require('stocks-exchange-client').client,
    option = {
        api_key:'', // YOUR API KEY HERE
        api_secret:'' // YOUR API SECRET HERE
    },
    se = new stocks(option, 'https://app.stex.com/api2', 2);

    /* GET USER ACCOUNT INFORMATION */
 
    // se.userInfo(function (res) {
    //     console.log(res);
    // });  

    /* GET CURRENT ABET - BTC ORDERS */

    //se.orderbook('ABET_BTC', function (res) {
    //     console.log('res');
    // }); 
          
    /* GET MOST RECENT ABET - BTC TRADE HISTORY */
    
    // se.tradeHistoryPub('ABET_BTC', function (res) {
    //     console.log(res);
    // });

    

    

    setInterval(() => {

        // let eRate = 0.00001 // TO ENTER A SPECIFIC TRADE RATE ENTER MANUALLY HERE AND COMMENT OUT THE BELOW LINE

        let eRate = (Math.random() * (0.000000901 - 0.000000301) + 0.0000011).toFixed(9) ;
        se.trade(  {type: 'SELL', pair: 'ABET_BTC', /* ENTER AMOUNT OF ABET TO SELL */ amount: 10.0, rate: eRate }
     , 

    function (res) {
        
        console.log(res);  
        console.log(eRate);
        
    },)
    }, 
    
    4000); // SetInterval time (default 4000) to increase or decrease sell volume.

    
    setInterval(() => {
        // let eRate = 0.00001 // TO ENTER A SPECIFIC TRADE RATE ENTER MANUALLY HERE AND COMMENT OUT THE BELOW LINE
        let eRate = (Math.random() * (0.000000901 - 0.000000301) + 0.0000011).toFixed(9);


         se.trade(  {type: 'BUY', pair: 'ABET_BTC', /* ENTER AMOUNT OF ABET TO BUY */ amount: 10.0, rate: eRate }, 
    
    function (res) {
        
    console.log(res);
    console.log(eRate);
        });
    }, 
    
    2000); // SetInterval time (default 2000) to increase or decrease buy volume.