import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkFeaturesIdRoute, getNetworkFeaturesRoute } from '../routes'

export const getNetworkFeaturesRouteHandler: RouteHandler<typeof getNetworkFeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNetworkFeaturesIdRouteHandler: RouteHandler<
  typeof getNetworkFeaturesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
