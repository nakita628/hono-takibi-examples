import type { RouteHandler } from '@hono/zod-openapi'
import type { getInsightsTopQueriesRoute } from '../routes'

export const getInsightsTopQueriesRouteHandler: RouteHandler<
  typeof getInsightsTopQueriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
