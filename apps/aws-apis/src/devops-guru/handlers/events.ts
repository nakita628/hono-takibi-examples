import type { RouteHandler } from '@hono/zod-openapi'
import type { postEventsRoute } from '../routes'

export const postEventsRouteHandler: RouteHandler<typeof postEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
