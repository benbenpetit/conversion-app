//Recois :
//  - le type de système d'unité (Impérial ou SI)
//  - la valeur de l'input (déjà convertie en km ou mile)
//  - une liste de nombre pour convertir mile->yard, yard->foot... (utile seulement imperial->si)
//Retourne un tableau avec toutes les informations pour l'affichage du résultat (label, value, unité)
export function converter(resultList, inputValue, convertFactorList) {
  if (resultList[0].kind == 'si') {
    var formatValue = inputValue.toString().split('').map(Number).reverse(); //On créer un tableau avec les valeurs en unités SI (reverse seulement utile pour l'affichage)
  } else {
    var formatValue = formatImperialToSi(
      inputValue,
      convertFactorList
    ).reverse(); //reverse seulement utile pour l'affichage
  }
  return resultList
    .map((ele, i) => ({
      ...ele,
      value: formatValue[i] ? formatValue[i] : 0,
    }))
    .reverse(); //reverse seulement utile pour l'affichage
}

//Recois un nombre en Mile et une liste de nombre pour faire la conversion
//Retourne un tableau de Mile, Yard foot, inch correspondant au Mile recus
function formatImperialToSi(number, convertFactorList) {
  let list = [];
  convertFactorList.map((convertFactor, i) => {
    list[i] = Math.trunc(number); //On met le quotient du nombre dans la liste de retour
    number = (number - Math.trunc(number)) * convertFactor; //On convertie le quotient avec l'unité inférieur (mile->yard...)
  });
  list[convertFactorList.length] = number.toFixed(2); //Sans oublier le reste du du dernier élément (on garde 2 décimales pour voir un changement)
  return list;
}
