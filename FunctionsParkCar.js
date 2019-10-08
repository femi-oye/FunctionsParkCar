const garage = 9
const parkCars = []

// Create a fixed amount of spaces in the garage


function parkMyCar(car) {
    if (parkCars.length < garage){
        parkCars.push(car)
            console.log(car + " is parked")
    }
        else{
        console.log ("There are no more spaces availalbe")
        }
        return true;
    }

        parkMyCar("Danfo")
        parkMyCar("Audi")
        parkMyCar("Honda")
        parkMyCar("Infinity")
        parkMyCar("Fiat")
        parkMyCar("Ford")
        parkMyCar("Lincoln")
        parkMyCar("BMW")
        parkMyCar("Volkswagen")
        parkMyCar("Toyota")

// create function takeforSpin


function takeforSpin(car){
    for (let i = 0; i < parkCars.length; i++){
    if (parkCars[i] === car){
        console.log('Your ' + car  + ' at ' + i + ' has been taken for a spin');     
    }
    else{
        console.log('Sorry your car was not parked in this garage');
    }
}
}
takeforSpin("Danfo");
takeforSpin("Audi");
takeforSpin("Honda");
takeforSpin("Infinity");
takeforSpin("Fiat");
takeforSpin("Ford");
takeforSpin("Lincoln");
takeforSpin("BMW");
takeforSpin("Volkswagen");
takeforSpin("Toyota");
takeforSpin("Suzuki");
