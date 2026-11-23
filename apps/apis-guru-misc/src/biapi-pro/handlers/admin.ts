import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminJwtRoute } from '../routes'

export const postAdminJwtRouteHandler: RouteHandler<typeof postAdminJwtRoute> = async (c) => {
  throw new Error('Not implemented')
}
