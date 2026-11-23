import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetresourcesharesRoute } from '../routes'

export const postGetresourcesharesRouteHandler: RouteHandler<
  typeof postGetresourcesharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
