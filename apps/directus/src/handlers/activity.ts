import type { RouteHandler } from '@hono/zod-openapi'
import type { getActivityIdRoute, getActivityRoute } from '../routes'

export const getActivityRouteHandler: RouteHandler<typeof getActivityRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getActivityIdRouteHandler: RouteHandler<typeof getActivityIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
