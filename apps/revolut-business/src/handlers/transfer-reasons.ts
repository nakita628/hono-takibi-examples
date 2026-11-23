import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransferReasonsRoute } from '../routes'

export const getTransferReasonsRouteHandler: RouteHandler<typeof getTransferReasonsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
