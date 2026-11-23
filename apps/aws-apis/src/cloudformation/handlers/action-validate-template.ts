import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionValidateTemplateRoute, postActionValidateTemplateRoute } from '../routes'

export const getActionValidateTemplateRouteHandler: RouteHandler<
  typeof getActionValidateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionValidateTemplateRouteHandler: RouteHandler<
  typeof postActionValidateTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
