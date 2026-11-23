import type { RouteHandler } from '@hono/zod-openapi'
import type { postRequestRoute } from '../routes'

export const postRequestRouteHandler: RouteHandler<typeof postRequestRoute> = async (c) => {
  throw new Error('Not implemented')
}
