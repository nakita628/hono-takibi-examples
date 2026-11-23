import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionTestRenderTemplateRoute, postActionTestRenderTemplateRoute } from '../routes'

export const getActionTestRenderTemplateRouteHandler: RouteHandler<
  typeof getActionTestRenderTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTestRenderTemplateRouteHandler: RouteHandler<
  typeof postActionTestRenderTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
