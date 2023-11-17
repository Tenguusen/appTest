function convertToIntegers(strings) {
    if(strings === null){ //Si le tableau est null
        return null
    }else{ //Prend en compte un tableau vide ou non vide
        return strings.map((element)=>{ //La méthode map execute une action sur tous les éléments du tableau
            if(typeof element == "string"){
                return parseInt(element);
            }
            //Si ce n'est pas un string => undefined, mais on pourrait décider de renvoyer autre chose
        })
    }
}

console.log(convertToIntegers(["1","2","3"])) //[1,2,3]
console.log(convertToIntegers([])) //[]
console.log(convertToIntegers(null)) //null

//Dans l'exercice, j'ai oublié le return
//Je n'ai pas eu le temps de traiter le null, mais un simple if suffit, comme on n'envoie pas une erreur