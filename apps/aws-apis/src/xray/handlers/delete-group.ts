import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteGroupRoute } from '../routes'

export const postDeleteGroupRouteHandler: RouteHandler<typeof postDeleteGroupRoute> = async (c) => {
  throw new Error('Not implemented')
}
