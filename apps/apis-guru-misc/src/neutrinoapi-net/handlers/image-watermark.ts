import type { RouteHandler } from '@hono/zod-openapi'
import type { postImageWatermarkRoute } from '../routes'

export const postImageWatermarkRouteHandler: RouteHandler<typeof postImageWatermarkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
