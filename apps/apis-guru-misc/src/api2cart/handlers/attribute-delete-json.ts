import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAttributeDeleteJsonRoute } from '../routes'

export const deleteAttributeDeleteJsonRouteHandler: RouteHandler<
  typeof deleteAttributeDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
