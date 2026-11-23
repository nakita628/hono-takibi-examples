import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateApplicationRoute } from '../routes'

export const postUpdateApplicationRouteHandler: RouteHandler<
  typeof postUpdateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
