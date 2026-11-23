import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsEventIdRoute, getEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsEventIdRouteHandler: RouteHandler<typeof getEventsEventIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
