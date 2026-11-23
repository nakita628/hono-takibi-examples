import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetAccessKeyInfoRoute, postActionGetAccessKeyInfoRoute } from '../routes'

export const getActionGetAccessKeyInfoRouteHandler: RouteHandler<
  typeof getActionGetAccessKeyInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAccessKeyInfoRouteHandler: RouteHandler<
  typeof postActionGetAccessKeyInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}
