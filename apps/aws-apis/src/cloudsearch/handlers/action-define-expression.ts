import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDefineExpressionRoute, postActionDefineExpressionRoute } from '../routes'

export const getActionDefineExpressionRouteHandler: RouteHandler<
  typeof getActionDefineExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDefineExpressionRouteHandler: RouteHandler<
  typeof postActionDefineExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
