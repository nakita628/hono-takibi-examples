import type { RouteHandler } from '@hono/zod-openapi'
import type { postClutterAddRoute } from '../routes'

export const postClutterAddRouteHandler: RouteHandler<typeof postClutterAddRoute> = async (c) => {
  throw new Error('Not implemented')
}
