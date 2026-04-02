"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/features/shared/components/ui/alert-dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/features/shared/components/ui/input-otp";
import { AspectRatio } from "@/features/shared/components/ui/aspect-ratio";
import { useDispatch, useSelector } from "react-redux";
import { loginSelectors } from "../state/loginSelector";
import { checkOtpUseCase } from "../useCases/checkOtpUseCase";
import { setOtp, setOtpDialogOpen } from "../state/loginSlice";

export default function OTPDialog() {
  //
  const dispatch = useDispatch();
  const inputs = useSelector(loginSelectors.inputs);
  const isOpen = useSelector(loginSelectors.isOtpDialogOpen);
  //
  const handleSubmit = () => {
    dispatch(checkOtpUseCase());
  };
  const handleCancel = () => {
    dispatch(setOtpDialogOpen({ value: false }));
  };
  //
  return (
    <AlertDialog
      open={isOpen}
      // onOpenChange={onOpenChange}
    >
      <AlertDialogContent className="w-100 font-[Geist]">
        <AlertDialogHeader>
          <AlertDialogTitle>OTP check</AlertDialogTitle>
          <AlertDialogDescription>
            Please fill the field with the Code , that we have send it to your
            Email.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center mt-4 mb-4">
          <InputOTP
            maxLength={6}
            value={inputs.otp}
            onChange={(value) => {
              dispatch(setOtp({ value }));
            }}
            containerClassName="w-full  space-x-2"
          >
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={0} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={1} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={2} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={3} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={4} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
            <InputOTPGroup className="w-full">
              <AspectRatio ratio={1}>
                <InputOTPSlot index={5} className="w-full h-full text-xl" />
              </AspectRatio>
            </InputOTPGroup>
          </InputOTP>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
