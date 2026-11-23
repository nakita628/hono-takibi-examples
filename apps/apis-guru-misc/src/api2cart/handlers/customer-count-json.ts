import type { RouteHandler } from '@hono/zod-openapi'
import type { getCustomerCountJsonRoute } from '../routes'

export const getCustomerCountJsonRouteHandler: RouteHandler<
  typeof getCustomerCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
