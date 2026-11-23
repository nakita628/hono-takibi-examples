import type { RouteHandler } from '@hono/zod-openapi'
import type { getResolveIndexNameRoute } from '../routes'

export const getResolveIndexNameRouteHandler: RouteHandler<
  typeof getResolveIndexNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
