import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRegisterImageRoute, postActionRegisterImageRoute } from '../routes'

export const getActionRegisterImageRouteHandler: RouteHandler<
  typeof getActionRegisterImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterImageRouteHandler: RouteHandler<
  typeof postActionRegisterImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
