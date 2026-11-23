import type { RouteHandler } from '@hono/zod-openapi'
import type { postForgetWifiRoute } from '../routes'

export const postForgetWifiRouteHandler: RouteHandler<typeof postForgetWifiRoute> = async (c) => {
  throw new Error('Not implemented')
}
