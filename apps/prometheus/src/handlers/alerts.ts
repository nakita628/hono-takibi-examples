import type { RouteHandler } from '@hono/zod-openapi'
import type { getAlertsRoute } from '../routes'

export const getAlertsRouteHandler: RouteHandler<typeof getAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}
