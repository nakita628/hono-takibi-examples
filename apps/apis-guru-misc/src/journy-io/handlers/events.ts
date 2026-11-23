import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsRoute, postEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsRouteHandler: RouteHandler<typeof postEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
