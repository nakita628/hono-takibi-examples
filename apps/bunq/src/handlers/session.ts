import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSessionItemIdRoute } from '../routes'

export const deleteSessionItemIdRouteHandler: RouteHandler<
  typeof deleteSessionItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
