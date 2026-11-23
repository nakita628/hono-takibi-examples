import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransactionIdRoute } from '../routes'

export const getTransactionIdRouteHandler: RouteHandler<typeof getTransactionIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
