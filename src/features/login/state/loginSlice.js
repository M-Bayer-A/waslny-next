import { createSlice } from "@reduxjs/toolkit";
import { checkCredentialsUseCase } from "../useCases/checkCredentialsUseCase";
import { toast } from "sonner";
import { checkOtpUseCase } from "../useCases/checkOtpUseCase";
import { redirect } from "next/navigation";

//
const initialState = {
  inputs: {
    email: "kmtsm1692004@gmail.com",
    password: "kmtsm1692004@gmail.com",
    otp: "",
  },
  loadingToastId: null,
  isOtpDialogOpen: false,
  isAuth: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    resetInputs: () => {
      return initialState;
    },
    setEmail: (state, { payload }) => {
      const { value } = payload;
      state.inputs.email = value;
    },
    setPassword: (state, { payload }) => {
      const { value } = payload;
      state.inputs.password = value;
    },
    setOtp: (state, { payload }) => {
      const { value } = payload;
      state.inputs.otp = value;
    },
    setOtpDialogOpen: (state, { payload }) => {
      const { value } = payload;
      state.isOtpDialogOpen = value;
    },
    setVerification: (state, { payload }) => {
      const { value } = payload;
      state.isAuth = value;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkCredentialsUseCase.pending, (state) => {
        console.log("Pending");
        state.loadingToastId = toast.loading("Loading", {
          description: "",
        });
      })
      .addCase(checkCredentialsUseCase.fulfilled, (state, action) => {
        console.log("FulFilld");
        toast.dismiss(state.loadingToastId);
        state.loadingToastId = null;
        toast.success("Success ✔", {
          description: "",
        });
        state.isOtpDialogOpen = true;
      })
      .addCase(checkCredentialsUseCase.rejected, (state, action) => {
        console.log("Rejected");
        //
        toast.dismiss(state.loadingToastId);
        state.loadingToastId = null;
        toast.error("Error ❗", {
          description: "",
        });
      });
    builder
      .addCase(checkOtpUseCase.pending, (state) => {
        console.log("Pending");
        state.loadingToastId = toast.loading("Loading", {
          description: "",
        });
      })
      .addCase(checkOtpUseCase.fulfilled, (state) => {
        console.log("FulFilld");
        toast.dismiss(state.loadingToastId);
        state.loadingToastId = null;
        toast.success("Success ✔", {
          description: "",
        });
        state.isAuth = true;
        redirect("/cscsc");
      })
      .addCase(checkOtpUseCase.rejected, (state) => {
        console.log("Rejected");
        //
        toast.dismiss(state.loadingToastId);
        state.loadingToastId = null;
        toast.error("Error ❗", {
          description: "",
        });
      });
  },
});

// Action creators are generated for each case reducer function
export const {
  resetInputs,
  setEmail,
  setOtp,
  setPassword,
  setOtpDialogOpen,
  setVerification,
} = loginSlice.actions;

export default loginSlice.reducer;
