import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTokenTokenNumberRoute,
  getTokenRoute,
  getTokenTokenNumberRoute,
  postTokenRoute,
} from '../routes'

export const getTokenRouteHandler: RouteHandler<typeof getTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTokenRouteHandler: RouteHandler<typeof postTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTokenTokenNumberRouteHandler: RouteHandler<
  typeof deleteTokenTokenNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokenTokenNumberRouteHandler: RouteHandler<
  typeof getTokenTokenNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
