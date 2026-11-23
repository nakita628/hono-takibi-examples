import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetfullnamematchRoute } from '../routes'

export const getGetfullnamematchRouteHandler: RouteHandler<
  typeof getGetfullnamematchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
