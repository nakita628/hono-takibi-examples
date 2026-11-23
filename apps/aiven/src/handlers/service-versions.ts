import type { RouteHandler } from '@hono/zod-openapi'
import type { getServiceVersionsRoute } from '../routes'

export const getServiceVersionsRouteHandler: RouteHandler<typeof getServiceVersionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
