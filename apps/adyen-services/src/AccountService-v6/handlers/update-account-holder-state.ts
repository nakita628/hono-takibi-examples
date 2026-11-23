import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAccountHolderStateRoute } from '../routes'

export const postUpdateAccountHolderStateRouteHandler: RouteHandler<
  typeof postUpdateAccountHolderStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
