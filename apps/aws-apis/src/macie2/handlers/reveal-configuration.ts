import type { RouteHandler } from '@hono/zod-openapi'
import type { getRevealConfigurationRoute, putRevealConfigurationRoute } from '../routes'

export const getRevealConfigurationRouteHandler: RouteHandler<
  typeof getRevealConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putRevealConfigurationRouteHandler: RouteHandler<
  typeof putRevealConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
