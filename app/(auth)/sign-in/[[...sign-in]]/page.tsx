import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center">
      <SignIn forceRedirectUrl="/user-dashboard" />
    </main>
  );
}
