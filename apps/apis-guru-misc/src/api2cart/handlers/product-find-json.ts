import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductFindJsonRoute } from '../routes'

export const getProductFindJsonRouteHandler: RouteHandler<typeof getProductFindJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
