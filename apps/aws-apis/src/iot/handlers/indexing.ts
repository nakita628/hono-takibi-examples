import type { RouteHandler } from '@hono/zod-openapi'
import type { getIndexingConfigRoute, postIndexingConfigRoute } from '../routes'

export const getIndexingConfigRouteHandler: RouteHandler<typeof getIndexingConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIndexingConfigRouteHandler: RouteHandler<typeof postIndexingConfigRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
