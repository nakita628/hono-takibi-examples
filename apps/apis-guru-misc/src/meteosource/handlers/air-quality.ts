import type { RouteHandler } from '@hono/zod-openapi'
import type { getAirQualityRoute } from '../routes'

export const getAirQualityRouteHandler: RouteHandler<typeof getAirQualityRoute> = async (c) => {
  throw new Error('Not implemented')
}
