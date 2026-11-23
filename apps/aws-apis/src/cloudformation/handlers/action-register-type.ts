import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRegisterTypeRoute, postActionRegisterTypeRoute } from '../routes'

export const getActionRegisterTypeRouteHandler: RouteHandler<
  typeof getActionRegisterTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterTypeRouteHandler: RouteHandler<
  typeof postActionRegisterTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
