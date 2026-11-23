import type { RouteHandler } from '@hono/zod-openapi'
import type { postBulkRoute, putBulkRoute } from '../routes'

export const putBulkRouteHandler: RouteHandler<typeof putBulkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBulkRouteHandler: RouteHandler<typeof postBulkRoute> = async (c) => {
  throw new Error('Not implemented')
}
