import type { RouteHandler } from '@hono/zod-openapi'
import type { postListDevicesRoute } from '../routes'

export const postListDevicesRouteHandler: RouteHandler<typeof postListDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
