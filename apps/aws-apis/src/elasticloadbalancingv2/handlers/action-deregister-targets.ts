import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeregisterTargetsRoute, postActionDeregisterTargetsRoute } from '../routes'

export const getActionDeregisterTargetsRouteHandler: RouteHandler<
  typeof getActionDeregisterTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterTargetsRouteHandler: RouteHandler<
  typeof postActionDeregisterTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
