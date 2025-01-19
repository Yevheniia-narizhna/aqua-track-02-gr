export const selectUserInfo = (state) => state.user.userInfo;
export const selectTokens = (state) => state.user.accessToken;
// export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
// export const selectEmail = (state) => state.user.email;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsRegistered = (state) => state.user.isRegistered;
export const selectIsRefreshing = (state) => state.user.isRefreshing;
// export const selectUserName = (state) => state.user.userInfo?.name; // Селектор для отримання імені
