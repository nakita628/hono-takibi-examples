import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreateSessionRoute, postCreateSessionRoute } from '../routes'

export const getCreateSessionRouteHandler: RouteHandler<typeof getCreateSessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCreateSessionRouteHandler: RouteHandler<typeof postCreateSessionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
