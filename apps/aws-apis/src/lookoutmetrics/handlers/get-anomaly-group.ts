import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetAnomalyGroupRoute } from '../routes'

export const postGetAnomalyGroupRouteHandler: RouteHandler<
  typeof postGetAnomalyGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
