import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateAccountHolderRoute } from '../routes'

export const postCreateAccountHolderRouteHandler: RouteHandler<
  typeof postCreateAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
