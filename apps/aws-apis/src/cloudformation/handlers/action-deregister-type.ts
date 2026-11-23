import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeregisterTypeRoute, postActionDeregisterTypeRoute } from '../routes'

export const getActionDeregisterTypeRouteHandler: RouteHandler<
  typeof getActionDeregisterTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterTypeRouteHandler: RouteHandler<
  typeof postActionDeregisterTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
