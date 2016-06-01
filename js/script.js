(function() {
  'use strict';
  var btn = document.getElementById('routeDHCP');

  btn.addEventListener('click', routeDHCP);

  function routeDHCP(){
    var result = document.getElementById('hexroute');
    var route = "0x";

    var addressVal = document.getElementById('dstaddress').value;
    var addressArr = addressVal.split('.');

    var subnetnum = document.getElementById('subnetnum').value;

    var gateway = document.getElementById('gateway').value;
    var gatewayArr = gateway.split('.');
    
    subnetnum = (+subnetnum).toString(16);
    subnetnum = Str0L(subnetnum, 2);
      
    route +=  subnetnum;

    for (var i=0; i < addressArr.length; i++) {
      var addressCorrect = (+addressArr[i]).toString(16); 
      addressCorrect = Str0L(addressCorrect, 2);
      route +=  addressCorrect;
    }

     for (var i=0; i < gatewayArr.length; i++) {
      var gatewayCorrect = (+gatewayArr[i]).toString(16);
      gatewayCorrect = Str0L(gatewayCorrect, 2);
      route += gatewayCorrect;
    }


    result.innerHTML = route;
  }

  // дополняет строку Val слева нулями до длины Len
  function Str0L(Val,Len)
  {
    var StrVal=Val.toString();
    while ( StrVal.length < Len )
      StrVal='0'+StrVal;
    return StrVal;
  }

  })();