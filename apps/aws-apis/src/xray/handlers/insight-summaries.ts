import type { RouteHandler } from '@hono/zod-openapi'
import type { postInsightSummariesRoute } from '../routes'

export const postInsightSummariesRouteHandler: RouteHandler<
  typeof postInsightSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
