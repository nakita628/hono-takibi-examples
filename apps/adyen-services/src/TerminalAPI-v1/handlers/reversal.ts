import type { RouteHandler } from '@hono/zod-openapi'
import type { postReversalRoute } from '../routes'

export const postReversalRouteHandler: RouteHandler<typeof postReversalRoute> = async (c) => {
  throw new Error('Not implemented')
}
