import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateApplicationRoute } from '../routes'

export const postCreateApplicationRouteHandler: RouteHandler<
  typeof postCreateApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
