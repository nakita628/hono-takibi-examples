import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvoicesInvoiceNumberRoute } from '../routes'

export const getInvoicesInvoiceNumberRouteHandler: RouteHandler<
  typeof getInvoicesInvoiceNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}
