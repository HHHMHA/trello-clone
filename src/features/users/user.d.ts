export interface User {
  id: number
  name: string
  email: string
  password: string | null
  isActive: boolean
  token: string | null
  refresh_token: string | null
}
