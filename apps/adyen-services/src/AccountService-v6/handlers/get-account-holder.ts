import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetAccountHolderRoute } from '../routes'

export const postGetAccountHolderRouteHandler: RouteHandler<
  typeof postGetAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
