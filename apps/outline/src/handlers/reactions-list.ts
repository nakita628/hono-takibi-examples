import type { RouteHandler } from '@hono/zod-openapi'
import type { postReactionsListRoute } from '../routes'

export const postReactionsListRouteHandler: RouteHandler<typeof postReactionsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
