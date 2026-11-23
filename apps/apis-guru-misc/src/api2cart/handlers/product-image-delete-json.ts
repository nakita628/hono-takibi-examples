import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteProductImageDeleteJsonRoute } from '../routes'

export const deleteProductImageDeleteJsonRouteHandler: RouteHandler<
  typeof deleteProductImageDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
