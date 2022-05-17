export function convertLengthOrWeight(
  startConversionList,
  finishConversionList,
  inputValue,
  unitSelected
) {
  //Si une unité est selectionnée
  if (unitSelected) {
    //On cherche les informations de cette unité sélectionnée
    const valueToConvert = startConversionList.find(
      (ele) => ele.unit == unitSelected
    );

    //On retourne un tableau avec la valeur convertie
    return finishConversionList.map((ele) => ({
      ...ele,
      value:
        //On vérifie dans quel système est l'unité sélectionnée
        valueToConvert.kind == 'si'
          ? inputValue * ele.convertFactor * Math.pow(10, valueToConvert.power)
          : inputValue / valueToConvert.convertFactor / Math.pow(10, ele.power),
    }));
  } else
    return finishConversionList.map((ele) => ({
      ...ele,
      value: 0,
    }));
}

export function formatLength(
  startConversionList,
  finishConversionList,
  inputValue,
  unitSelected
) {
  let list = convertLengthOrWeight(
    startConversionList,
    finishConversionList,
    inputValue,
    unitSelected
  );

  console.log(list);
}
