import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateFromSourceDestRoute, putCreateFromSourceDestRoute } from '../routes'

export const putCreateFromSourceDestRouteHandler: RouteHandler<
  typeof putCreateFromSourceDestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCreateFromSourceDestRouteHandler: RouteHandler<
  typeof postCreateFromSourceDestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
