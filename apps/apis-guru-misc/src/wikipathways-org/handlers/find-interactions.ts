import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindInteractionsRoute } from '../routes'

export const getFindInteractionsRouteHandler: RouteHandler<
  typeof getFindInteractionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
