import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsEventIdRoute } from '../routes'

export const getEventsEventIdRouteHandler: RouteHandler<typeof getEventsEventIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
