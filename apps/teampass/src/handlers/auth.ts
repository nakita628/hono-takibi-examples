import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthLogoutRoute } from '../routes'

export const postAuthLogoutRouteHandler: RouteHandler<typeof postAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
