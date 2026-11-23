import type { RouteHandler } from '@hono/zod-openapi'
import type { postAccountstatusesBatchRoute } from '../routes'

export const postAccountstatusesBatchRouteHandler: RouteHandler<
  typeof postAccountstatusesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
