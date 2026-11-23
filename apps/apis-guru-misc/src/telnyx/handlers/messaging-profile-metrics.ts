import type { RouteHandler } from '@hono/zod-openapi'
import type { getMessagingProfileMetricsRoute } from '../routes'

export const getMessagingProfileMetricsRouteHandler: RouteHandler<
  typeof getMessagingProfileMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
