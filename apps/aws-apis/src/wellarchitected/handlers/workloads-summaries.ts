import type { RouteHandler } from '@hono/zod-openapi'
import type { postWorkloadsSummariesRoute } from '../routes'

export const postWorkloadsSummariesRouteHandler: RouteHandler<
  typeof postWorkloadsSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
