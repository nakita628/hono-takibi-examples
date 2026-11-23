import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsIdRoute, getEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdRouteHandler: RouteHandler<typeof getEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
