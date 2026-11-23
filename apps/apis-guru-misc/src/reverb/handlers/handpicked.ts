import type { RouteHandler } from '@hono/zod-openapi'
import type { getHandpickedSlugRoute } from '../routes'

export const getHandpickedSlugRouteHandler: RouteHandler<typeof getHandpickedSlugRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
