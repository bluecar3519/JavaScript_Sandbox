console.log("PROGRAM STARTED");

var name = 'Mozilla';

function variableFuction() {
    
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const print = variableFuction();
  print();


console.log("PROGRAM ENDED");