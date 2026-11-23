import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworksOwnerRepoEventsRoute } from '../routes'

export const getNetworksOwnerRepoEventsRouteHandler: RouteHandler<
  typeof getNetworksOwnerRepoEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
