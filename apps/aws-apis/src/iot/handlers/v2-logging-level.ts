import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2LoggingLevelRoute, postV2LoggingLevelRoute } from '../routes'

export const getV2LoggingLevelRouteHandler: RouteHandler<typeof getV2LoggingLevelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2LoggingLevelRouteHandler: RouteHandler<typeof postV2LoggingLevelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
