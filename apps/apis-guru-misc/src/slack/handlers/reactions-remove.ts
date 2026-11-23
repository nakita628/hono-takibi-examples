import type { RouteHandler } from '@hono/zod-openapi'
import type { postReactionsRemoveRoute } from '../routes'

export const postReactionsRemoveRouteHandler: RouteHandler<
  typeof postReactionsRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
