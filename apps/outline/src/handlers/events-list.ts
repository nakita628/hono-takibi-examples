import type { RouteHandler } from '@hono/zod-openapi'
import type { postEventsListRoute } from '../routes'

export const postEventsListRouteHandler: RouteHandler<typeof postEventsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
