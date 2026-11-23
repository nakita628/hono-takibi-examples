import type { RouteHandler } from '@hono/zod-openapi'
import type { postSuspendAccountHolderRoute } from '../routes'

export const postSuspendAccountHolderRouteHandler: RouteHandler<
  typeof postSuspendAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
