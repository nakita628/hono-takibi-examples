import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1InitializeCustomerRoute } from '../routes'

export const postV1InitializeCustomerRouteHandler: RouteHandler<
  typeof postV1InitializeCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}
