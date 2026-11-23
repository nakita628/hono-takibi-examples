import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteNetworkAclRoute, postActionDeleteNetworkAclRoute } from '../routes'

export const getActionDeleteNetworkAclRouteHandler: RouteHandler<
  typeof getActionDeleteNetworkAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteNetworkAclRouteHandler: RouteHandler<
  typeof postActionDeleteNetworkAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}
