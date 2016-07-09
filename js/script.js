(function() {
  'use strict';
  var btn = document.getElementById('routeDHCP');  
  createSelectOptions();

  btn.addEventListener('click', routeDHCP);
  
  var testData = [];
  testData[0] = { 'addressVal' : '10.0.0.0' };
  testData[1] = { 'addressVal' : '10.1.0.0' };
  testData[2] = { 'addressVal' : '10.0.1.0' };
  testData[3] = { 'addressVal' : '10.0.0.1' };
  testData[4] = { 'addressVal' : '192.168.30.0' };
  testData[5] = { 'addressVal' : '171.0.10.250' };
  testData[6] = { 'addressVal' : '171.10.0.0' };
    
  for (var i=0; i < testData.length; i++) {
    testAddress(testData[i].addressVal);
  };
  
  function testAddress(addressVal) {
    var addressArr = addressVal.split('.');
    var result = '';
    
    console.log('addressArr 1 = ' + addressArr);
    addressArr = cutArrNullEnd(addressArr);
    console.log('addressArr 2 = ' + addressArr);
        
    for (var i=0; i < addressArr.length; i++) {
      var addressCorrect = (+addressArr[i]).toString(16); 
      addressCorrect = Str0L(addressCorrect, 2);
      result +=  addressCorrect;
    }
    
    console.log(addressVal);
    console.log(result);
    console.log('***********');
    
    return result;
  }

  
  
  function cutArrNullEnd(arr) {
    for (var i = (arr.length - 1); i >=0; i--) {
//      console.log('arr'+[i]+'= '+arr[i]);
      if (1*arr[i] !== 0) {
        return arr;
      } else {
        arr.splice(i, 1);
      }
    };
    return arr;
  }
 

  function routeDHCP(){
    var result = document.getElementById('hexroute');
    var addressVal = document.getElementById('dstaddress').value;
    
    var route = "0x";
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

  
/********************************************/
  function createSelectOptions() {  
    var subnetArr = [
    {"0": "/ (0.0.0.0)"},
    {"1": "/ (128.0.0.0)"},
    {"2": "/ (192.0.0.0)"},
    {"3": "/ (224.0.0.0)"},
    {"4": "/ (240.0.0.0)"},
    {"5": "/ (248.0.0.0)"},
    {"6": "/ (252.0.0.0)"},
    {"7": "/ (254.0.0.0)"},
    {"8": "/ (255.0.0.0)"},
    {"9": "/ (255.128.0.0)"},
    {"10": "/ (255.192.0.0)"},
    {"11": "/ (255.224.0.0)"},
    {"12": "/ (255.240.0.0)"},
    {"13": "/ (255.248.0.0)"},
    {"14": "/ (255.252.0.0)"},
    {"15": "/ (255.254.0.0)"},
    {"16": "/ (255.255.0.0)"},
    {"17": "/ (255.255.128.0)"},
    {"18": "/ (255.255.192.0)"},
    {"19": "/ (255.255.224.0)"},
    {"20": "/ (255.255.240.0)"},
    {"21": "/ (255.255.248.0)"},
    {"22": "/ (255.255.252.0)"},
    {"23": "/ (255.255.254.0)"},
    {"24": "/ (255.255.255.0)"},
    {"25": "/ (255.255.255.128)"},
    {"26": "/ (255.255.255.192)"},
    {"27": "/ (255.255.255.224)"},
    {"28": "/ (255.255.255.240)"},
    {"29": "/ (255.255.255.248)"},
    {"30": "/ (255.255.255.252)"},
    {"31": "/ (255.255.255.254)"},
    {"32": "/ (255.255.255.255)"}
  ];  
  
    // Создаем фрагмент  
    var oFrag   = document.createDocumentFragment();
    
    var subnetLength = subnetArr.length;
    
    for (var i = 0; i < subnetLength; i++) {
      var option = document.createElement("option");
      var optionObj = subnetArr[i];
      var optionVal;
      for (var key in optionObj) {        
        if (optionObj.hasOwnProperty(key)) {
          optionVal = key;
        }
      }

      option.setAttribute("value", optionVal);
      option.appendChild(document.createTextNode(key + optionObj[key]));
      oFrag.appendChild(option);
    }
    
    document.getElementById('subnetnum').appendChild(oFrag);
  /*
    while (aLI.length) {  
        var oLI = document.createElement("li");  
  
        // Берем первый элемент массива и добавляем  
        // как текстовый узел в элемент LI  
        oLI.appendChild(document.createTextNode(aLI.shift()));  
        oFrag.appendChild(oLI);  
    }  
  
    document.getElementById('myUL').appendChild(oFrag);  
    */
}
  
  })();