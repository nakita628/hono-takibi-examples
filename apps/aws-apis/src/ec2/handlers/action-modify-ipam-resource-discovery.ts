import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyIpamResourceDiscoveryRoute,
  postActionModifyIpamResourceDiscoveryRoute,
} from '../routes'

export const getActionModifyIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof getActionModifyIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof postActionModifyIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
