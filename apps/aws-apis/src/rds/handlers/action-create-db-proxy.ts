import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDBProxyRoute, postActionCreateDBProxyRoute } from '../routes'

export const getActionCreateDBProxyRouteHandler: RouteHandler<
  typeof getActionCreateDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBProxyRouteHandler: RouteHandler<
  typeof postActionCreateDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
