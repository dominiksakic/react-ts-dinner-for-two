import { UserLogin } from "./global";

export function isUserLogin(data: unknown): data is UserLogin {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const { email, password } = data as Record<string, unknown>;
  return typeof email === "string" && typeof password === "string";
}
