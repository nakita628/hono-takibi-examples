import type { RouteHandler } from '@hono/zod-openapi'
import type { getInboxRoute, getInboxUnreadRoute } from '../routes'

export const getInboxRouteHandler: RouteHandler<typeof getInboxRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboxUnreadRouteHandler: RouteHandler<typeof getInboxUnreadRoute> = async (c) => {
  throw new Error('Not implemented')
}
