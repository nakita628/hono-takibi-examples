import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerFindJsonRoute } from '../routes'

export const getCustomerFindJsonRouteHandler: RouteHandler<
  typeof getCustomerFindJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
