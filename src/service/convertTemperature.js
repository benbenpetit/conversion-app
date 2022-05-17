export function convertTemperature(
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
        valueToConvert.kind == 'celsius'
          ? inputValue * (9 / 5) + 32
          : (inputValue - 32) * (5 / 9),
    }));
  } else
    return finishConversionList.map((ele) => ({
      ...ele,
      value: 0,
    }));
}
