import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteAccessKeyRoute, postActionDeleteAccessKeyRoute } from '../routes'

export const getActionDeleteAccessKeyRouteHandler: RouteHandler<
  typeof getActionDeleteAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteAccessKeyRouteHandler: RouteHandler<
  typeof postActionDeleteAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
