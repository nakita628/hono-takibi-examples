import type { RouteHandler } from '@hono/zod-openapi'
import type { postPricingPreviewRoute } from '../routes'

export const postPricingPreviewRouteHandler: RouteHandler<typeof postPricingPreviewRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
