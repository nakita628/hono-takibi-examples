import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductstatusesBatchRoute } from '../routes'

export const postProductstatusesBatchRouteHandler: RouteHandler<
  typeof postProductstatusesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
