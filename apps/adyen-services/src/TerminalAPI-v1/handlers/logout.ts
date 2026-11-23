import type { RouteHandler } from '@hono/zod-openapi'
import type { postLogoutRoute } from '../routes'

export const postLogoutRouteHandler: RouteHandler<typeof postLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
