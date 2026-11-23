import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchExecuteRoute } from '../routes'

export const postBatchExecuteRouteHandler: RouteHandler<typeof postBatchExecuteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
