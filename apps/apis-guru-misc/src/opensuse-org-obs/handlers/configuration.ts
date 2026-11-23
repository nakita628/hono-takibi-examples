import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigurationRoute, putConfigurationRoute } from '../routes'

export const getConfigurationRouteHandler: RouteHandler<typeof getConfigurationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putConfigurationRouteHandler: RouteHandler<typeof putConfigurationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
