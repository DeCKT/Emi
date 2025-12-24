import Link from "next/link";
import { register } from "../actions";

export default function RegisterPage() {
  return (
    <div className="w-full h-full grid grid-cols-[280px_1fr] gap-3 py-3">
      <div className="flex flex-col h-full justify-center gap-4">
        <form action={register}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="registerEmail">Email:</label>
              <input
                type="email"
                name="email"
                id="registerEmail"
                required
                className="outline p-2 rounded-md"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="registerPassword" className="">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="registerPassword"
                required
                className="outline p-2 rounded-md"
                minLength={8}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="registerPasswordConfirm" className="">
                Confirm Password:
              </label>
              <input
                type="password"
                name="password"
                id="registerPasswordConfirm"
                required
                className="outline p-2 rounded-md"
                minLength={8}
              />
            </div>

            <button
              type="submit"
              className="block px-5 py-3 rounded-lg bg-rose font-bold hover:cursor-pointer mt-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div>This is some neat-o graphic or something :)</div>
    </div>
  );
}
