import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyListenerRoute, postActionModifyListenerRoute } from '../routes'

export const getActionModifyListenerRouteHandler: RouteHandler<
  typeof getActionModifyListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyListenerRouteHandler: RouteHandler<
  typeof postActionModifyListenerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
