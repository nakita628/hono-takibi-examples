import type { RouteHandler } from '@hono/zod-openapi'
import type { getV1TaxCountrycodeRoute, getV1TaxIpRoute } from '../routes'

export const getV1TaxCountrycodeRouteHandler: RouteHandler<
  typeof getV1TaxCountrycodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxIpRouteHandler: RouteHandler<typeof getV1TaxIpRoute> = async (c) => {
  throw new Error('Not implemented')
}
