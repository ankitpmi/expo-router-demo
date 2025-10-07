type RouteConfig<K extends string, P extends string> = {
  key: K
  path: P
  name: string
  route: (val?: string) => string
}

export const Routes = {
  HOME: {
    key: "Home",
    path: "(main)/(tabs)/Home/index" as const,
    name: "Home/index",
    route: () => `/(main)/(tabs)/Home` as const,
  },
  LOGIN: {
    key: "Login",
    path: "(auth)/Login/index" as const,
    name: "Login",
    route: () => `/(auth)/Login` as const,
  },
  TABS: {
    key: "Tabs",
    path: "(main)/(tabs)" as const,
    name: "(main)/(tabs)",
    route: () => `/(main)/(drawer)/(tabs)` as const,
  },
  PROFILE: {
    key: "Profile",
    path: "(main)/(tabs)/Profile/index" as const,
    name: "Profile/index",
    route: () => `/(main)/(tabs)/Profile` as const,
  },
  SEARCH: {
    key: "Search",
    path: "(main)/(tabs)/Search/index" as const,
    name: "Search/index",
    route: () => `/(main)/(tabs)/Search` as const,
  },
  HELP_CENTER: {
    key: "HelpCenter",
    path: "(main)/HelpCenter/index" as const,
    name: "HelpCenter",
    route: () => `/(main)/HelpCenter` as const,
  },
  APP_DRAWER: {
    key: "DrawerLayout",
    path: "(main)/(drawer)" as const,
    name: "(main)/(drawer)",
    route: () => `/` as const,
  },
} as const satisfies Record<string, RouteConfig<string, string>>
