import type { RouteHandler } from '@hono/zod-openapi'
import type { postCloseAccountHolderRoute } from '../routes'

export const postCloseAccountHolderRouteHandler: RouteHandler<
  typeof postCloseAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
