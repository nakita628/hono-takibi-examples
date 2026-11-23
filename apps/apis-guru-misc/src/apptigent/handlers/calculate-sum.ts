import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateSumRoute } from '../routes'

export const postCalculateSumRouteHandler: RouteHandler<typeof postCalculateSumRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
