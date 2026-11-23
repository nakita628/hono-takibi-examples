import type { RouteHandler } from '@hono/zod-openapi'
import type { postRotateImageRoute } from '../routes'

export const postRotateImageRouteHandler: RouteHandler<typeof postRotateImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
