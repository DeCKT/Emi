import Link from "next/link";
import { login } from "../actions";

export default function LoginPage() {
  return (
    <div className="w-full h-full grid grid-cols-[280px_1fr] gap-3 py-3">
      <div className="flex flex-col h-full justify-center gap-4">
        <form action={login}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="loginEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="loginEmail"
                required
                className="outline p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="loginPassword" className="">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="loginPassword"
                required
                className="outline p-2 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="block px-5 py-3 rounded-lg bg-rose font-bold hover:cursor-pointer mt-4"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center">
          Don't have an account? <br />
          <Link href="/user/register" className="underline text-green-600">
            Sign Up
          </Link>{" "}
          for free!
        </p>
      </div>
      <div>This is some neat-o graphic or something :)</div>
    </div>
  );
}
