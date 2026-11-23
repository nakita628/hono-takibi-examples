import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateIpamResourceDiscoveryRoute,
  postActionAssociateIpamResourceDiscoveryRoute,
} from '../routes'

export const getActionAssociateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof getActionAssociateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof postActionAssociateIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
