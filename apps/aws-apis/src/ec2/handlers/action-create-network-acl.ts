import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateNetworkAclRoute, postActionCreateNetworkAclRoute } from '../routes'

export const getActionCreateNetworkAclRouteHandler: RouteHandler<
  typeof getActionCreateNetworkAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNetworkAclRouteHandler: RouteHandler<
  typeof postActionCreateNetworkAclRoute
> = async (c) => {
  throw new Error('Not implemented')
}
