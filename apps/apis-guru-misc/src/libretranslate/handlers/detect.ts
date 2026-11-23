import type { RouteHandler } from '@hono/zod-openapi'
import type { postDetectRoute } from '../routes'

export const postDetectRouteHandler: RouteHandler<typeof postDetectRoute> = async (c) => {
  throw new Error('Not implemented')
}
