import { redirect } from "next/navigation";

export default async function Page() {
  const isLoggedIn = false; // 🔥 replace with real auth check

  if (!isLoggedIn) {
    redirect("/login");
  }

  redirect("/dashboard");
}
