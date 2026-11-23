import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigurationsRoute } from '../routes'

export const getConfigurationsRouteHandler: RouteHandler<typeof getConfigurationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
