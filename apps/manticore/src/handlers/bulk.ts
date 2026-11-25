import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkRoute } from '../routes'

export const postBulkRouteHandler: RouteHandler<typeof postBulkRoute> = async (c) => {
  throw new Error('Not implemented')
}
