import type { RouteHandler } from '@hono/zod-openapi'
import type { postUsageEventsRoute } from '../routes'

export const postUsageEventsRouteHandler: RouteHandler<typeof postUsageEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
