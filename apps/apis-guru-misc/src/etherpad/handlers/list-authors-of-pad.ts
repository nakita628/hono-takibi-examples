import type { RouteHandler } from '@hono/zod-openapi'
import type { getListAuthorsOfPadRoute, postListAuthorsOfPadRoute } from '../routes'

export const getListAuthorsOfPadRouteHandler: RouteHandler<
  typeof getListAuthorsOfPadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListAuthorsOfPadRouteHandler: RouteHandler<
  typeof postListAuthorsOfPadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
