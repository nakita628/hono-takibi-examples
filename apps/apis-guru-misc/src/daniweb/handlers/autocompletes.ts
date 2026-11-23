import type { RouteHandler } from '@hono/zod-openapi'
import type { getAutocompletesRoute } from '../routes'

export const getAutocompletesRouteHandler: RouteHandler<typeof getAutocompletesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
