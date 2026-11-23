import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProductDeleteJsonRoute } from '../routes'

export const deleteProductDeleteJsonRouteHandler: RouteHandler<
  typeof deleteProductDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
