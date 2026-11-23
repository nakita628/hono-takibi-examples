import type { RouteHandler } from '@hono/zod-openapi'
import type { getCardsCustomerIdRoute } from '../routes'

export const getCardsCustomerIdRouteHandler: RouteHandler<typeof getCardsCustomerIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
