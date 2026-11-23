import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkNetworkIdRoute } from '../routes'

export const getNetworkNetworkIdRouteHandler: RouteHandler<
  typeof getNetworkNetworkIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
