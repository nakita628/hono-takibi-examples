import type { RouteHandler } from '@hono/zod-openapi'
import type { getSupportedDevicesRoute } from '../routes'

export const getSupportedDevicesRouteHandler: RouteHandler<
  typeof getSupportedDevicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
