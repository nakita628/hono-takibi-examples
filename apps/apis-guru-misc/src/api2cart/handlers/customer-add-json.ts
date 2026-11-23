import type { RouteHandler } from '@hono/zod-openapi'
import type { postCustomerAddJsonRoute } from '../routes'

export const postCustomerAddJsonRouteHandler: RouteHandler<
  typeof postCustomerAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
