import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateTemplateRoute, postActionCreateTemplateRoute } from '../routes'

export const getActionCreateTemplateRouteHandler: RouteHandler<
  typeof getActionCreateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTemplateRouteHandler: RouteHandler<
  typeof postActionCreateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
