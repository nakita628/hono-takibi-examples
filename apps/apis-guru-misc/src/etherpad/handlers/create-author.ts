import type { RouteHandler } from '@hono/zod-openapi'
import type { getCreateAuthorRoute, postCreateAuthorRoute } from '../routes'

export const getCreateAuthorRouteHandler: RouteHandler<typeof getCreateAuthorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreateAuthorRouteHandler: RouteHandler<typeof postCreateAuthorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
