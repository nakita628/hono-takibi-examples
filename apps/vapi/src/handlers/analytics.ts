import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnalyticsRoute } from '../routes'

export const postAnalyticsRouteHandler: RouteHandler<typeof postAnalyticsRoute> = async (c) => {
  throw new Error('Not implemented')
}
