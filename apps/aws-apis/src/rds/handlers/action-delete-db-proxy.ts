import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDBProxyRoute, postActionDeleteDBProxyRoute } from '../routes'

export const getActionDeleteDBProxyRouteHandler: RouteHandler<
  typeof getActionDeleteDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBProxyRouteHandler: RouteHandler<
  typeof postActionDeleteDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
