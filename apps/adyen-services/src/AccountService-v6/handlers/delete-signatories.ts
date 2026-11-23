import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteSignatoriesRoute } from '../routes'

export const postDeleteSignatoriesRouteHandler: RouteHandler<
  typeof postDeleteSignatoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
