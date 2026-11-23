import type { RouteHandler } from '@hono/zod-openapi'
import type { postConvertImageRoute } from '../routes'

export const postConvertImageRouteHandler: RouteHandler<typeof postConvertImageRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
