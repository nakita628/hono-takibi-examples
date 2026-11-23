import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRegisterTargetsRoute, postActionRegisterTargetsRoute } from '../routes'

export const getActionRegisterTargetsRouteHandler: RouteHandler<
  typeof getActionRegisterTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterTargetsRouteHandler: RouteHandler<
  typeof postActionRegisterTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
