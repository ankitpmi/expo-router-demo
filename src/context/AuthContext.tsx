import AsyncStorage from "@react-native-async-storage/async-storage"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

// 👇 Define context type
type AuthContextType = {
  isLoggedIn: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

// 👇 Create context with default value
export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
})

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  // Load saved login state from AsyncStorage
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedState = await AsyncStorage.getItem("isLoggedIn")
        if (storedState !== null) {
          setIsLoggedIn(JSON.parse(storedState))
          setIsLoading(false)
        }
      } catch (err) {
        console.error("Failed to load auth state", err)
      } finally {
        setIsLoading(false)
      }
    }
    loadAuthState()
  }, [])

  // Login function
  const login = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(true))
      setIsLoggedIn(true)
    } catch (err) {
      console.error("Login error", err)
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(false))
      setIsLoggedIn(false)
    } catch (err) {
      console.error("Logout error", err)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
