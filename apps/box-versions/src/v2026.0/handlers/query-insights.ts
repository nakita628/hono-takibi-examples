import type { RouteHandler } from '@hono/zod-openapi'
import type { postQueryInsightsRoute } from '../routes'

export const postQueryInsightsRouteHandler: RouteHandler<typeof postQueryInsightsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
