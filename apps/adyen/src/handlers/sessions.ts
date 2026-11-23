import type { RouteHandler } from '@hono/zod-openapi'
import type { getSessionsSessionIdRoute, postSessionsRoute } from '../routes'

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSessionIdRouteHandler: RouteHandler<
  typeof getSessionsSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
