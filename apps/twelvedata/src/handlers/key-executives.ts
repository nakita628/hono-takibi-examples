import type { RouteHandler } from '@hono/zod-openapi'
import type { getKeyExecutivesRoute } from '../routes'

export const getKeyExecutivesRouteHandler: RouteHandler<typeof getKeyExecutivesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
