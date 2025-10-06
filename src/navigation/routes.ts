export const Routes = {
  HOME: {
    key: "Home",
    path: "/(main)/Home" as const,
    route: () => `/(main)/Home` as const,
  },
  LOGIN: {
    key: "Login",
    path: "/(auth)/Login" as const,
    route: () => `/(auth)/Login` as const,
  },
}
