import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateIpamResourceDiscoveryRoute,
  postActionCreateIpamResourceDiscoveryRoute,
} from '../routes'

export const getActionCreateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof getActionCreateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof postActionCreateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
