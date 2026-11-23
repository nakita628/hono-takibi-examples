import type { RouteHandler } from '@hono/zod-openapi'
import type { postDevicesRoute } from '../routes'

export const postDevicesRouteHandler: RouteHandler<typeof postDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
