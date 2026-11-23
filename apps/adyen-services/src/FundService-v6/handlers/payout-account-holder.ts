import type { RouteHandler } from '@hono/zod-openapi'
import type { postPayoutAccountHolderRoute } from '../routes'

export const postPayoutAccountHolderRouteHandler: RouteHandler<
  typeof postPayoutAccountHolderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
