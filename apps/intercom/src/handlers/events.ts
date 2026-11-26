import type { RouteHandler } from '@hono/zod-openapi'
import type { postEventsRoute, getEventsRoute, postEventsSummariesRoute } from '../routes'

export const postEventsRouteHandler: RouteHandler<typeof postEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEventsSummariesRouteHandler: RouteHandler<
  typeof postEventsSummariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
