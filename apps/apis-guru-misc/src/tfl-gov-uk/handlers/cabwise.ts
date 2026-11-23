import type { RouteHandler } from '@hono/zod-openapi'
import type { getCabwiseSearchRoute } from '../routes'

export const getCabwiseSearchRouteHandler: RouteHandler<typeof getCabwiseSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
