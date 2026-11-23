import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailThreadsRoute, getEmailThreadsThreadIdRoute } from '../routes'

export const getEmailThreadsRouteHandler: RouteHandler<typeof getEmailThreadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailThreadsThreadIdRouteHandler: RouteHandler<
  typeof getEmailThreadsThreadIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
