import type { RouteHandler } from '@hono/zod-openapi'
import type { postShippingsettingsBatchRoute } from '../routes'

export const postShippingsettingsBatchRouteHandler: RouteHandler<
  typeof postShippingsettingsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
