/**
 * @returns {Number}
 */
function calc(array, n1, n2){
    var sum = 0

    for(i=0; i<array.length;i++){
        //Si i est compris entre n1 et n2, on ajoute array[i] à la somme finale
        if(i<=n2 && i>=n1){
            sum+=array[i]
        }
    }
    return sum;
}

var array = [0,1,2,3,4,5,3]
console.log(calc(array,0,1)); //1
console.log(calc(array,0,5)); //15
console.log(calc(array,0,0)); //0
console.log(calc(array,2,6)); //17

// Dans le test, mon problème était lié à une faute d'inattention
// Je ne devais pas boucler autour de array[i] mais autour de i bien sûr...