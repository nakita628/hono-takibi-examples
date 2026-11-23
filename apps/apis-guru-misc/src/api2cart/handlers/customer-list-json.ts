import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerListJsonRoute } from '../routes'

export const getCustomerListJsonRouteHandler: RouteHandler<
  typeof getCustomerListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
