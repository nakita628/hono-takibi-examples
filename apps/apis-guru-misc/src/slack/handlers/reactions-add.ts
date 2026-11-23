import type { RouteHandler } from '@hono/zod-openapi'
import type { postReactionsAddRoute } from '../routes'

export const postReactionsAddRouteHandler: RouteHandler<typeof postReactionsAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
