import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateAccessKeyRoute, postActionCreateAccessKeyRoute } from '../routes'

export const getActionCreateAccessKeyRouteHandler: RouteHandler<
  typeof getActionCreateAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateAccessKeyRouteHandler: RouteHandler<
  typeof postActionCreateAccessKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
