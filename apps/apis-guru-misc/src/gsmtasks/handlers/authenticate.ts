import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthenticateIndexRoute } from '../routes'

export const postAuthenticateIndexRouteHandler: RouteHandler<
  typeof postAuthenticateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
