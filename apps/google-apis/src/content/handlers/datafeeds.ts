import type { RouteHandler } from '@hono/zod-openapi'
import type { postDatafeedsBatchRoute } from '../routes'

export const postDatafeedsBatchRouteHandler: RouteHandler<typeof postDatafeedsBatchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
