import type { RouteHandler } from '@hono/zod-openapi'
import type { getCheckForUpdateRoute } from '../routes'

export const getCheckForUpdateRouteHandler: RouteHandler<typeof getCheckForUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
