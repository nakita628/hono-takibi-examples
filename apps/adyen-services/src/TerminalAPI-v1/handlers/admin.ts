import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminRoute } from '../routes'

export const postAdminRouteHandler: RouteHandler<typeof postAdminRoute> = async (c) => {
  throw new Error('Not implemented')
}
