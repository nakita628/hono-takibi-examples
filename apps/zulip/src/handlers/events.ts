import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteEventsRoute, getEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEventsRouteHandler: RouteHandler<typeof deleteEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
