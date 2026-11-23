import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetTemplateRoute, postActionGetTemplateRoute } from '../routes'

export const getActionGetTemplateRouteHandler: RouteHandler<
  typeof getActionGetTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetTemplateRouteHandler: RouteHandler<
  typeof postActionGetTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
