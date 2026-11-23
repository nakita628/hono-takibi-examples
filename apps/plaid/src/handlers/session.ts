import type { RouteHandler } from '@hono/zod-openapi'
import type { postSessionTokenCreateRoute } from '../routes'

export const postSessionTokenCreateRouteHandler: RouteHandler<
  typeof postSessionTokenCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
