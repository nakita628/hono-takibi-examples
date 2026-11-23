import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchUsageEventsRoute } from '../routes'

export const postBatchUsageEventsRouteHandler: RouteHandler<
  typeof postBatchUsageEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
