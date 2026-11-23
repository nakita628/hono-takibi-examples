import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthFirstTimeLoginRoute, getAuthRoute } from '../routes'

export const getAuthFirstTimeLoginRouteHandler: RouteHandler<
  typeof getAuthFirstTimeLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthRouteHandler: RouteHandler<typeof getAuthRoute> = async (c) => {
  throw new Error('Not implemented')
}
