const primeContainer = document.getElementById('main-container');

function isPrime(num) {
   if(num < 2 ){
    return false;
   }

   for(let i=2; i<= Math.sqrt(num); i++){
    if(num % i === 0)
    {
        return false;
    }
   }
   return true;
}
function displayPrimesIncrementally(n) {
    let primes = [];
    let i = 1;
    let primeslength = 100;

    function primesarr() {
        let end = Math.min(i + primeslength, n + 1);
        for (; i < end; i++) {
            if (isPrime(i)) {
                primes.push(i);
                primeContainer.textContent += i + ', ';
            }
        }
        if (i <= n) {
            setTimeout(primesarr, 0);  
        } else {
            alert('Calculation is finished');
        }
    }

    primesarr();
}

displayPrimesIncrementally(10000);