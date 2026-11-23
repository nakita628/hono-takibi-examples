import type { RouteHandler } from '@hono/zod-openapi'
import type { postSignOutUserRoute } from '../routes'

export const postSignOutUserRouteHandler: RouteHandler<typeof postSignOutUserRoute> = async (c) => {
  throw new Error('Not implemented')
}
