import LoginForm from "@/features/login/components/LoginForm";
import OTPDialog from "@/features/login/components/OTPDialog";
import { Toaster } from "@/features/shared/components/ui/sonner";
import { CustomIcons, getIcon } from "@/helpers/iconsHelper";

export default function Login() {
  return (
    <div className="w-screen h-screen flex md:flex-row flex-col-reverse">
      {/* Black Side */}
      <div className="w-full md:h-full h-[25%] flex flex-col justify-between p-10 bg-zinc-900 font-[Geist] text-lg text-amber-50">
        <div className="flex flex-row font-medium">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="waslny"
            src={getIcon(CustomIcons.waslny)}
            className="mr-2"
          />
          <p>waslny Inc</p>
        </div>
        <p className="font-normal">Administer | Monitor | Scale.</p>
      </div>
      {/* == Black Side == */}

      {/* White Side */}
      <div className="w-full md:h-full h-[75%] content-center place-items-center p-10 space-y-3 bg-white font-[Geist]">
        <h1 className="font-semibold text-[24px]">Login to account</h1>
        <p className="font-normal text-[14px] text-zinc-500">
          Enter the User Name and the password
        </p>
        <LoginForm />
        <p className="font-normal text-[14px]  text-zinc-500 text-center">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
      {/* == White Side == */}
      <Toaster
        position="bottom-right"
        theme="light"
        richColors
        closeButton
        toastOptions={{
          duration: 4000,
          className: "rounded-lg shadow-lg",
        }}
      />
      <OTPDialog />
    </div>
  );
}
