"use client";
import { signInAction, signInGithubAction } from "../_lib/actions";

function SignInButton({ provider }) {
  const isGoogle = provider === "google";

  const action = isGoogle ? () => signInAction() : () => signInGithubAction();
  const logo = isGoogle
    ? "https://authjs.dev/img/providers/google.svg"
    : "https://authjs.dev/img/providers/github.svg";
  const text = isGoogle ? "Continue with Google" : "Continue with GitHub";

  return (
    <form action={action}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img src={logo} alt={`${provider} logo`} height="24" width="24" />
        <span>{text}</span>
      </button>
    </form>
  );
}

export default SignInButton;
