export const loginSelectors = {
  inputs: (state) => state.login.inputs,
  loadingToastId: (state) => state.login.loadingToastId,
  isOtpDialogOpen: (state) => state.login.isOtpDialogOpen,
  isAuth: (state) => state.login.isAuth,
};
