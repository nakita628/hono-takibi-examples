import type { RouteHandler } from '@hono/zod-openapi'
import type { getShippingProvidersRoute, getShippingRegionsRoute } from '../routes'

export const getShippingProvidersRouteHandler: RouteHandler<
  typeof getShippingProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShippingRegionsRouteHandler: RouteHandler<typeof getShippingRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
