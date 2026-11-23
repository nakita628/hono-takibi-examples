import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateIpamResourceDiscoveryRoute,
  postActionDisassociateIpamResourceDiscoveryRoute,
} from '../routes'

export const getActionDisassociateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof getActionDisassociateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof postActionDisassociateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
