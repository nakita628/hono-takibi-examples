import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckBalanceRoute } from '../routes'

export const postCheckBalanceRouteHandler: RouteHandler<typeof postCheckBalanceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
