import type { RouteHandler } from '@hono/zod-openapi'
import type { postMergeBalanceRoute } from '../routes'

export const postMergeBalanceRouteHandler: RouteHandler<typeof postMergeBalanceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
