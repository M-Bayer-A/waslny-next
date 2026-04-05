"use client";
import { Button } from "@/features/shared/components/ui/button";
import { Input } from "@/features/shared/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { loginSelectors } from "../state/loginSelector";
import { checkCredentialsUseCase } from "../useCases/checkCredentialsUseCase";
import { setEmail, setPassword } from "../state/loginSlice";

export default function LoginForm() {
  //
  const dispatch = useDispatch();
  const inputs = useSelector(loginSelectors.inputs);
  const loadingToastId = useSelector(loginSelectors.loadingToastId);
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkCredentialsUseCase());
  };
  //
  return (
    <form className="min-w-50 space-y-2" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="user name"
        value={inputs.email}
        onChange={(e) => {
          dispatch(setEmail({ value: e.target.value }));
        }}
      />
      <Input
        type="password"
        placeholder="password"
        value={inputs.password}
        onChange={(e) => {
          dispatch(setPassword({ value: e.target.value }));
        }}
      />
      <Button
        className="w-full"
        type="submit"
        disabled={loadingToastId !== null} // Disable while loading
      >
        {loadingToastId !== null ? "Signing In..." : "Sign In"}
      </Button>
    </form>
  );
}
