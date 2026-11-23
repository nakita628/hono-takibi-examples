import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthReadyRoute, getHealthVendorsRoute } from '../routes'

export const getHealthReadyRouteHandler: RouteHandler<typeof getHealthReadyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthVendorsRouteHandler: RouteHandler<typeof getHealthVendorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
