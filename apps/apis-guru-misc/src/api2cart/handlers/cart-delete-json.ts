import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCartDeleteJsonRoute } from '../routes'

export const deleteCartDeleteJsonRouteHandler: RouteHandler<
  typeof deleteCartDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
