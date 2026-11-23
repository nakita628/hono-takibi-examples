import type { RouteHandler } from '@hono/zod-openapi'
import type { getIsosIdRoute, getIsosRoute } from '../routes'

export const getIsosRouteHandler: RouteHandler<typeof getIsosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIsosIdRouteHandler: RouteHandler<typeof getIsosIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
