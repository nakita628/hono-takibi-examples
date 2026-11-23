import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublicConfigDefaultsRoute, getPublicConfigRoute } from '../routes'

export const getPublicConfigRouteHandler: RouteHandler<typeof getPublicConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPublicConfigDefaultsRouteHandler: RouteHandler<
  typeof getPublicConfigDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
