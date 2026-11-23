import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerGroupListJsonRoute } from '../routes'

export const getCustomerGroupListJsonRouteHandler: RouteHandler<
  typeof getCustomerGroupListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
