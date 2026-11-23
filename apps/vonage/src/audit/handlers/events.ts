import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventsIdRoute, getEventsRoute, optionsEventsRoute } from '../routes'

export const getEventsRouteHandler: RouteHandler<typeof getEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsEventsRouteHandler: RouteHandler<typeof optionsEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventsIdRouteHandler: RouteHandler<typeof getEventsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
