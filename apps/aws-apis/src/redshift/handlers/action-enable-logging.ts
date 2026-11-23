import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableLoggingRoute, postActionEnableLoggingRoute } from '../routes'

export const getActionEnableLoggingRouteHandler: RouteHandler<
  typeof getActionEnableLoggingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableLoggingRouteHandler: RouteHandler<
  typeof postActionEnableLoggingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
