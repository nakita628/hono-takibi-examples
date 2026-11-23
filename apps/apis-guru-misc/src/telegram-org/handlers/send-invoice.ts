import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendInvoiceRoute } from '../routes'

export const postSendInvoiceRouteHandler: RouteHandler<typeof postSendInvoiceRoute> = async (c) => {
  throw new Error('Not implemented')
}
