export const selectDailyGoal = (state) => {
  console.log("selector", state.waterNorma);
  return state.waterNorma.dailyGoal;
};
export const selectWaterStatus = (state) => state.waterNorma.status;

export const selectWaterData = (state) => state.waterNorma.waterData;
export const selectIsLoading = (state) => state.waterNorma.isLoading;
export const selectIsError = (state) => state.waterNorma.isError;
