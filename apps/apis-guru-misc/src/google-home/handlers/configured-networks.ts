import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfiguredNetworksRoute } from '../routes'

export const getConfiguredNetworksRouteHandler: RouteHandler<
  typeof getConfiguredNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
