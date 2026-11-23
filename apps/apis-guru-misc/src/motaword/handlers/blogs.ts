import type { RouteHandler } from '@hono/zod-openapi'
import type { getBlogsRoute } from '../routes'

export const getBlogsRouteHandler: RouteHandler<typeof getBlogsRoute> = async (c) => {
  throw new Error('Not implemented')
}
