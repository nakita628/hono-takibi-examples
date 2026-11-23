import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionUpdateTemplateRoute, postActionUpdateTemplateRoute } from '../routes'

export const getActionUpdateTemplateRouteHandler: RouteHandler<
  typeof getActionUpdateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateTemplateRouteHandler: RouteHandler<
  typeof postActionUpdateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
