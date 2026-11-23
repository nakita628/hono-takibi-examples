import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeregisterImageRoute, postActionDeregisterImageRoute } from '../routes'

export const getActionDeregisterImageRouteHandler: RouteHandler<
  typeof getActionDeregisterImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterImageRouteHandler: RouteHandler<
  typeof postActionDeregisterImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
