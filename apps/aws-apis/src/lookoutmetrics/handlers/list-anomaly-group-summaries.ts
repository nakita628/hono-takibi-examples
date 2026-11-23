import type { RouteHandler } from '@hono/zod-openapi'
import type { postListAnomalyGroupSummariesRoute } from '../routes'

export const postListAnomalyGroupSummariesRouteHandler: RouteHandler<
  typeof postListAnomalyGroupSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
