import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionsIdRoute, getActionsRoute } from '../routes'

export const getActionsIdRouteHandler: RouteHandler<typeof getActionsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getActionsRouteHandler: RouteHandler<typeof getActionsRoute> = async (c) => {
  throw new Error('Not implemented')
}
