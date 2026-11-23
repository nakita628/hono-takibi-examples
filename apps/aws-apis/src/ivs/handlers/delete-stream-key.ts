import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteStreamKeyRoute } from '../routes'

export const postDeleteStreamKeyRouteHandler: RouteHandler<
  typeof postDeleteStreamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
