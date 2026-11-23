import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerAttributeListJsonRoute } from '../routes'

export const getCustomerAttributeListJsonRouteHandler: RouteHandler<
  typeof getCustomerAttributeListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
