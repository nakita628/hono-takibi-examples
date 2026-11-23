import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionChangePasswordRoute, postActionChangePasswordRoute } from '../routes'

export const getActionChangePasswordRouteHandler: RouteHandler<
  typeof getActionChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionChangePasswordRouteHandler: RouteHandler<
  typeof postActionChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
