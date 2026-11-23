import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetRecentChangesRoute } from '../routes'

export const getGetRecentChangesRouteHandler: RouteHandler<
  typeof getGetRecentChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
