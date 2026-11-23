import type { RouteHandler } from '@hono/zod-openapi'
import type { getMobileOperatorNetworksRoute } from '../routes'

export const getMobileOperatorNetworksRouteHandler: RouteHandler<
  typeof getMobileOperatorNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
