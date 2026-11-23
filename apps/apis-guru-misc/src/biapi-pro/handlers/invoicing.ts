import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvoicingRoute } from '../routes'

export const getInvoicingRouteHandler: RouteHandler<typeof getInvoicingRoute> = async (c) => {
  throw new Error('Not implemented')
}
