import type { RouteHandler } from '@hono/zod-openapi'
import type { postCustomerGroupAddJsonRoute } from '../routes'

export const postCustomerGroupAddJsonRouteHandler: RouteHandler<
  typeof postCustomerGroupAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
