import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigRoute, postConfigRoute } from '../routes'

export const postConfigRouteHandler: RouteHandler<typeof postConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}
