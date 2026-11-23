import type { RouteHandler } from '@hono/zod-openapi'
import type { postListImagesRoute } from '../routes'

export const postListImagesRouteHandler: RouteHandler<typeof postListImagesRoute> = async (c) => {
  throw new Error('Not implemented')
}
