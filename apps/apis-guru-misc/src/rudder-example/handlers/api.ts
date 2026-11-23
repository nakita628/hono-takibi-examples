import type { RouteHandler } from '@hono/zod-openapi'
import type { getApiChangeRequestsRoute } from '../routes'

export const getApiChangeRequestsRouteHandler: RouteHandler<
  typeof getApiChangeRequestsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
