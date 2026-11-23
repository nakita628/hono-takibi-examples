import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteIpamResourceDiscoveryRoute,
  postActionDeleteIpamResourceDiscoveryRoute,
} from '../routes'

export const getActionDeleteIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof getActionDeleteIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIpamResourceDiscoveryRouteHandler: RouteHandler<
  typeof postActionDeleteIpamResourceDiscoveryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
