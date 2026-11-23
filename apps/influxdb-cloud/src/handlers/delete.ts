import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteRoute } from '../routes'

export const postDeleteRouteHandler: RouteHandler<typeof postDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}
