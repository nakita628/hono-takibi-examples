import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetAuthorNameRoute, postGetAuthorNameRoute } from '../routes'

export const getGetAuthorNameRouteHandler: RouteHandler<typeof getGetAuthorNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGetAuthorNameRouteHandler: RouteHandler<typeof postGetAuthorNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
