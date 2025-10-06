export const Routes = {
  HOME: {
    key: "Home",
    path: "(main)/Home/index" as const,
    route: () => `/(main)/Home` as const,
  },
  LOGIN: {
    key: "Login",
    path: "(auth)/Login/index" as const,
    route: () => `/(auth)/Login` as const,
  },
}
