import type { RouteHandler } from '@hono/zod-openapi'
import type { postDocgenBatchesRoute } from '../routes'

export const postDocgenBatchesRouteHandler: RouteHandler<typeof postDocgenBatchesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
