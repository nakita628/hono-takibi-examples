import type { RouteHandler } from '@hono/zod-openapi'
import type { postTransactionRoute } from '../routes'

export const postTransactionRouteHandler: RouteHandler<typeof postTransactionRoute> = async (c) => {
  throw new Error('Not implemented')
}
