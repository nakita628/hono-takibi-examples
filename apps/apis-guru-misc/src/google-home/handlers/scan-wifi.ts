import type { RouteHandler } from '@hono/zod-openapi'
import type { postScanWifiRoute } from '../routes'

export const postScanWifiRouteHandler: RouteHandler<typeof postScanWifiRoute> = async (c) => {
  throw new Error('Not implemented')
}
