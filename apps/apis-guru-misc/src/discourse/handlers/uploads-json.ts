import type { RouteHandler } from '@hono/zod-openapi'
import type { postUploadsJsonRoute } from '../routes'

export const postUploadsJsonRouteHandler: RouteHandler<typeof postUploadsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
