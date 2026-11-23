import type { RouteHandler } from '@hono/zod-openapi'
import type { getRelatedSearchesRoute } from '../routes'

export const getRelatedSearchesRouteHandler: RouteHandler<typeof getRelatedSearchesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
