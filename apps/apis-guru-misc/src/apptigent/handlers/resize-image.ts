import type { RouteHandler } from '@hono/zod-openapi'
import type { postResizeImageRoute } from '../routes'

export const postResizeImageRouteHandler: RouteHandler<typeof postResizeImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
