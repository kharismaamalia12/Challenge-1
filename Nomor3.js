let tinggi = 1.7;
let berat  = 90;
let bmi    = berat / Math.pow(tinggi, 2);

    if (bmi < 18.5){
        console.log("Kekurangan berat badan");
    }else if (bmi >= 18.5 && bmi <= 24.9){
        console.log("Normal atau ideal");
    }else if (bmi >= 25 && bmi <= 29.9){
        console.log("Kelebihan berat badan");
    }else{
        console.log("Kegemukan atau obesitas");
    }

console.log("Tinggi : 170 cm");
console.log("Berat  : 90 kg");
console.log("BMI    : " + bmi);