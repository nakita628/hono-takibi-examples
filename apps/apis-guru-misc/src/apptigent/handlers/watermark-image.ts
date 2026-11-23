import type { RouteHandler } from '@hono/zod-openapi'
import type { postWatermarkImageRoute } from '../routes'

export const postWatermarkImageRouteHandler: RouteHandler<typeof postWatermarkImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
