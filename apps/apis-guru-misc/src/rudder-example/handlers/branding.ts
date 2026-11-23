import type { RouteHandler } from '@hono/zod-openapi'
import type { getBrandingRoute, postBrandingReloadRoute, postBrandingRoute } from '../routes'

export const getBrandingRouteHandler: RouteHandler<typeof getBrandingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBrandingRouteHandler: RouteHandler<typeof postBrandingRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBrandingReloadRouteHandler: RouteHandler<typeof postBrandingReloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
