import type { RouteHandler } from '@hono/zod-openapi'
import type { getCheckoutChangeToAnonymousUserOrderFormIdRoute } from '../routes'

export const getCheckoutChangeToAnonymousUserOrderFormIdRouteHandler: RouteHandler<
  typeof getCheckoutChangeToAnonymousUserOrderFormIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
