import type { RouteHandler } from '@hono/zod-openapi'
import type { postPosBatchRoute } from '../routes'

export const postPosBatchRouteHandler: RouteHandler<typeof postPosBatchRoute> = async (c) => {
  throw new Error('Not implemented')
}
