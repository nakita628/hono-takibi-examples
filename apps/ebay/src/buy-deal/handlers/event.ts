import type { RouteHandler } from '@hono/zod-openapi'
import type { getEventEventIdRoute, getEventRoute } from '../routes'

export const getEventRouteHandler: RouteHandler<typeof getEventRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEventEventIdRouteHandler: RouteHandler<typeof getEventEventIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
