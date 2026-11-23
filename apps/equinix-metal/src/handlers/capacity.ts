import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCapacityMetrosRoute,
  getCapacityRoute,
  postCapacityMetrosRoute,
  postCapacityRoute,
} from '../routes'

export const getCapacityRouteHandler: RouteHandler<typeof getCapacityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCapacityRouteHandler: RouteHandler<typeof postCapacityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCapacityMetrosRouteHandler: RouteHandler<typeof getCapacityMetrosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCapacityMetrosRouteHandler: RouteHandler<typeof postCapacityMetrosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
