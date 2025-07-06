import type { RouteMeta } from 'vue-router'

export interface CustomRouteMeta extends RouteMeta {
  header?: any
  footer?: any
}
