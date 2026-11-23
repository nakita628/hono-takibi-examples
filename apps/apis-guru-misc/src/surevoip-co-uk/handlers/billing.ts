import type { RouteHandler } from '@hono/zod-openapi'
import type { getBillingRoute } from '../routes'

export const getBillingRouteHandler: RouteHandler<typeof getBillingRoute> = async (c) => {
  throw new Error('Not implemented')
}
