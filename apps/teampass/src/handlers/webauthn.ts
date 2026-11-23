import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWebauthnDeleteRoute,
  getWebauthnListRoute,
  postWebauthnAssertRoute,
  postWebauthnCreateRoute,
} from '../routes'

export const postWebauthnCreateRouteHandler: RouteHandler<typeof postWebauthnCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getWebauthnListRouteHandler: RouteHandler<typeof getWebauthnListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWebauthnAssertRouteHandler: RouteHandler<typeof postWebauthnAssertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteWebauthnDeleteRouteHandler: RouteHandler<
  typeof deleteWebauthnDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
