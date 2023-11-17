// Etape 1 : faire un tableau de chiffres existants (arrayBloc)
// (si le charactere est different de X ou . et qu'il n'appartient pas deja a arrayBloc => on l'ajoute
// Etape 2 : Trouver un bloc de chiffre qui n'est pas bloqué par un autre bloc puis le supprimer ce chiffre du arrayBloc
// (trouver un chiffre qui n'a pas de chiffre apres lui => index dans la ligne de char doit etre > l'index des autres chiffres)
// Répeter l'étape 2 tant qu'il existe des chiffres dans arrayBloc

const nb_blocks = 4
const width = 6
const height = 5
const grid = [
    "XXXXXX",
    "X6.8..",
    "X1.88.",
    "X11112",
    "XXXXXX"
]


function solve(width,height,nb_blocks,grid){
   const arrayBlock = detectBlocks()
   const ordre = []
   for(let i = 0; i < nb_blocks; i++){
        const nbToDelete = detectNumberToDelete(arrayBlock,grid);
        ordre.push(nbToDelete)
        const index = arrayBlock.indexOf(nbToDelete);
        arrayBlock.splice(index, 1);
   }
   console.log(ordre)
}    

function detectNumberToDelete(arrayBlock,grid) {
    const wrongNumbers = [] // tous les nombres qui ont un autre nombre à droite d'eux
    let solution = "undefined"
    arrayBlock.forEach((block) => {
        let bestBlock = true
        let alreadyFound = false
        if(!alreadyFound){
            grid.forEach((ligne)=>{
                arrayBlock.forEach((blockConcu)=>{
                    if(!wrongNumbers.includes(block) && ligne.includes(block) && block !== blockConcu && getLastIndex(block,ligne) < getLastIndex(blockConcu,ligne)){
                        wrongNumbers.push(block)
                        bestBlock = false
                    } 
                })
            })
        }
        if(bestBlock){
            solution = block
            alreadyFound = true
        }
    })
    return solution
}

function getLastIndex(char, ligne){
    return ligne.lastIndexOf(char)
}

function detectBlocks() {
    let arrayBlock = []
    grid.forEach((ligne) => {
        for(let c=0; c < ligne.length; c++){
            const currentChar = ligne[c]
            if(currentChar !== "X" && currentChar !== "." && !arrayBlock.includes(currentChar)){
                arrayBlock.push(currentChar)
            }
        }
    });
    return arrayBlock;
}

solve()