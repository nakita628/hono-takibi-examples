import type { RouteHandler } from '@hono/zod-openapi'
import type { putCustomerUpdateJsonRoute } from '../routes'

export const putCustomerUpdateJsonRouteHandler: RouteHandler<
  typeof putCustomerUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
