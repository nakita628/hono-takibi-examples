import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsRoute, optionsEventsRoute } from '../routes'

export const optionsEventsRouteHandler: RouteHandler<typeof optionsEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
