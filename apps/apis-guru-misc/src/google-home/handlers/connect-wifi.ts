import type { RouteHandler } from '@hono/zod-openapi'
import type { postConnectWifiRoute } from '../routes'

export const postConnectWifiRouteHandler: RouteHandler<typeof postConnectWifiRoute> = async (c) => {
  throw new Error('Not implemented')
}
