import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAccountHolderRoute } from '../routes'

export const postUpdateAccountHolderRouteHandler: RouteHandler<
  typeof postUpdateAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
