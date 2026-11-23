import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteExpressionRoute, postActionDeleteExpressionRoute } from '../routes'

export const getActionDeleteExpressionRouteHandler: RouteHandler<
  typeof getActionDeleteExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteExpressionRouteHandler: RouteHandler<
  typeof postActionDeleteExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
