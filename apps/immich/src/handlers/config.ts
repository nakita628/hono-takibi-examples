import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigDefaultsRoute, getConfigRoute } from '../routes'

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigDefaultsRouteHandler: RouteHandler<typeof getConfigDefaultsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
