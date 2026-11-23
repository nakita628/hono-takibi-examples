import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnSuspendAccountHolderRoute } from '../routes'

export const postUnSuspendAccountHolderRouteHandler: RouteHandler<
  typeof postUnSuspendAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
