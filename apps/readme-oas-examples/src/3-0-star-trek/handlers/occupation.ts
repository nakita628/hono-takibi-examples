import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOccupationRoute,
  getOccupationSearchRoute,
  postOccupationSearchRoute,
} from '../routes'

export const getOccupationRouteHandler: RouteHandler<typeof getOccupationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOccupationSearchRouteHandler: RouteHandler<
  typeof getOccupationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOccupationSearchRouteHandler: RouteHandler<
  typeof postOccupationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
