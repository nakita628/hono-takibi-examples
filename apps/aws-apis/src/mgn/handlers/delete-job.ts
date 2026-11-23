import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteJobRoute } from '../routes'

export const postDeleteJobRouteHandler: RouteHandler<typeof postDeleteJobRoute> = async (c) => {
  throw new Error('Not implemented')
}
