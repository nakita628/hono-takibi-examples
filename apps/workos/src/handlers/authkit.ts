import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthkitOauth2CompleteRoute } from '../routes'

export const postAuthkitOauth2CompleteRouteHandler: RouteHandler<
  typeof postAuthkitOauth2CompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
