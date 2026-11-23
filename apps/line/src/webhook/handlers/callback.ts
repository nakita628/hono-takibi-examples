import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallbackRoute } from '../routes'

export const postCallbackRouteHandler: RouteHandler<typeof postCallbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
