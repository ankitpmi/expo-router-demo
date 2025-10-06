// Define a generic type for routes
type RouteConfig<K extends string, P extends string> = {
  key: K
  path: P
  route: (val?: string) => string
}

export const Routes = {
  HOME: {
    key: "Home",
    path: "(main)/(tabs)/Home/index" as const,
    route: () => `/(main)/(tabs)/Home` as const,
  },
  LOGIN: {
    key: "Login",
    path: "(auth)/Login/index" as const,
    route: () => `/(auth)/Login` as const,
  },
  TABS: {
    key: "Tabs",
    path: "(main)/(tabs)" as const,
    route: () => `/` as const,
  },
  PROFILE: {
    key: "Profile",
    path: "(main)/(tabs)/Profile/index" as const,
    route: () => `/(main)/(tabs)/Profile` as const,
  },
  SEARCH: {
    key: "Search",
    path: "(main)/(tabs)/Search/index" as const,
    route: () => `/(main)/(tabs)/Search` as const,
  },
  HELP_CENTER: {
    key: "HelpCenter",
    path: "(main)/HelpCenter/index" as const,
    route: () => `/(main)/HelpCenter` as const,
  },
} as const satisfies Record<string, RouteConfig<string, string>>
