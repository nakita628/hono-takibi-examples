import type { RouteHandler } from '@hono/zod-openapi'
import type { postBatchGetRecordRoute } from '../routes'

export const postBatchGetRecordRouteHandler: RouteHandler<typeof postBatchGetRecordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
