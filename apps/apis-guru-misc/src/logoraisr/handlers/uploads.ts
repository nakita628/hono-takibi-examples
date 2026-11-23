import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadsIndexRoute } from '../routes'

export const postUploadsIndexRouteHandler: RouteHandler<typeof postUploadsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
