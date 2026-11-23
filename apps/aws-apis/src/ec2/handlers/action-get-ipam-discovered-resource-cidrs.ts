import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIpamDiscoveredResourceCidrsRoute,
  postActionGetIpamDiscoveredResourceCidrsRoute,
} from '../routes'

export const getActionGetIpamDiscoveredResourceCidrsRouteHandler: RouteHandler<
  typeof getActionGetIpamDiscoveredResourceCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamDiscoveredResourceCidrsRouteHandler: RouteHandler<
  typeof postActionGetIpamDiscoveredResourceCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
