import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateThumbnailRoute } from '../routes'

export const postGenerateThumbnailRouteHandler: RouteHandler<
  typeof postGenerateThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
