import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyDBProxyRoute, postActionModifyDBProxyRoute } from '../routes'

export const getActionModifyDBProxyRouteHandler: RouteHandler<
  typeof getActionModifyDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBProxyRouteHandler: RouteHandler<
  typeof postActionModifyDBProxyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
