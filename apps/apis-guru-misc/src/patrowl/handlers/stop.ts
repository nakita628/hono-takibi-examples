import type { RouteHandler } from '@hono/zod-openapi'
import type { getStopScanIdRoute } from '../routes'

export const getStopScanIdRouteHandler: RouteHandler<typeof getStopScanIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
