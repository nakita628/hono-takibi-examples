import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdminTopicsRoute } from '../routes'

export const postAdminTopicsRouteHandler: RouteHandler<typeof postAdminTopicsRoute> = async (c) => {
  throw new Error('Not implemented')
}
