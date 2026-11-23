import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionRestartAppServerRoute, postActionRestartAppServerRoute } from '../routes'

export const getActionRestartAppServerRouteHandler: RouteHandler<
  typeof getActionRestartAppServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestartAppServerRouteHandler: RouteHandler<
  typeof postActionRestartAppServerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
