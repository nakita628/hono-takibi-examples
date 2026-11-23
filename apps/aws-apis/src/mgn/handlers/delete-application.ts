import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteApplicationRoute } from '../routes'

export const postDeleteApplicationRouteHandler: RouteHandler<
  typeof postDeleteApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
