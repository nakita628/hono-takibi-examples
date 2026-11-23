import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerInfoJsonRoute } from '../routes'

export const getCustomerInfoJsonRouteHandler: RouteHandler<
  typeof getCustomerInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
