import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevicesRoute } from '../routes'

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
