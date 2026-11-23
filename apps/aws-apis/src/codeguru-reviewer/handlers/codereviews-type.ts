import type { RouteHandler } from '@hono/zod-openapi'
import type { getCodereviewsTypeRoute } from '../routes'

export const getCodereviewsTypeRouteHandler: RouteHandler<typeof getCodereviewsTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
