import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetIpamDiscoveredAccountsRoute,
  postActionGetIpamDiscoveredAccountsRoute,
} from '../routes'

export const getActionGetIpamDiscoveredAccountsRouteHandler: RouteHandler<
  typeof getActionGetIpamDiscoveredAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetIpamDiscoveredAccountsRouteHandler: RouteHandler<
  typeof postActionGetIpamDiscoveredAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
