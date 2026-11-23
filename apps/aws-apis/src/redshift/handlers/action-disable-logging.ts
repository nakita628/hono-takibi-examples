import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDisableLoggingRoute, postActionDisableLoggingRoute } from '../routes'

export const getActionDisableLoggingRouteHandler: RouteHandler<
  typeof getActionDisableLoggingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableLoggingRouteHandler: RouteHandler<
  typeof postActionDisableLoggingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
