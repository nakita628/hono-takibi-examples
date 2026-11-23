import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteMeVendorsVendorRoute, getMeRoute } from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMeVendorsVendorRouteHandler: RouteHandler<
  typeof deleteMeVendorsVendorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
