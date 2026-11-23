import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigurationRoute } from '../routes'

export const getConfigurationRouteHandler: RouteHandler<typeof getConfigurationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
