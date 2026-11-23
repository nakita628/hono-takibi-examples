import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDeleteAccountRoute } from '../routes'

export const deleteDeleteAccountRouteHandler: RouteHandler<
  typeof deleteDeleteAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
