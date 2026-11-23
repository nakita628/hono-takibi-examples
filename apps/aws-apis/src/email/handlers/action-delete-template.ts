import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteTemplateRoute, postActionDeleteTemplateRoute } from '../routes'

export const getActionDeleteTemplateRouteHandler: RouteHandler<
  typeof getActionDeleteTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteTemplateRouteHandler: RouteHandler<
  typeof postActionDeleteTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
