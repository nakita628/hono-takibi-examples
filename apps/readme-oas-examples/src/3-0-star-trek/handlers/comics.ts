import type { RouteHandler } from '@hono/zod-openapi'
import type { getComicsRoute, getComicsSearchRoute, postComicsSearchRoute } from '../routes'

export const getComicsRouteHandler: RouteHandler<typeof getComicsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getComicsSearchRouteHandler: RouteHandler<typeof getComicsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postComicsSearchRouteHandler: RouteHandler<typeof postComicsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
