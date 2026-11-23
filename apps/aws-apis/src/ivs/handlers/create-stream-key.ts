import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateStreamKeyRoute } from '../routes'

export const postCreateStreamKeyRouteHandler: RouteHandler<
  typeof postCreateStreamKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
