import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetImagesRoute } from '../routes'

export const postGetImagesRouteHandler: RouteHandler<typeof postGetImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
