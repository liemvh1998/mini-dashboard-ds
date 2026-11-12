export type Status = 'active' | 'pending' | 'inactive' | 'archived'

export interface User {
  id: string
  name: string
  email: string
  role: string
  status: Status
  avatarUrl?: string
  lastActive: string
}

export interface MetricCardData {
  id: string
  title: string
  value: string | number
  changePercentage: number
  trend: 'up' | 'down' | 'neutral'
  description?: string
}

