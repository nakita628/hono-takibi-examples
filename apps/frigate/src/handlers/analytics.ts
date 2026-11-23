import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnalyticsPreviewRoute } from '../routes'

export const getAnalyticsPreviewRouteHandler: RouteHandler<
  typeof getAnalyticsPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}
