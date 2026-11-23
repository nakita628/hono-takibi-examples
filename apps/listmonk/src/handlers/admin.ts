import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminReloadRoute } from '../routes'

export const postAdminReloadRouteHandler: RouteHandler<typeof postAdminReloadRoute> = async (c) => {
  throw new Error('Not implemented')
}
