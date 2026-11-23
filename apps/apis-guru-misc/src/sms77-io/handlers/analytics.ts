import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnalyticsRoute } from '../routes'

export const getAnalyticsRouteHandler: RouteHandler<typeof getAnalyticsRoute> = async (c) => {
  throw new Error('Not implemented')
}
