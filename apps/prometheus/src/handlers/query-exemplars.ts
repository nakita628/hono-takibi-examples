import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryExemplarsRoute, postQueryExemplarsRoute } from '../routes'

export const getQueryExemplarsRouteHandler: RouteHandler<typeof getQueryExemplarsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQueryExemplarsRouteHandler: RouteHandler<typeof postQueryExemplarsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
