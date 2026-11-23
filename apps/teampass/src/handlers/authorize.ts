import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthorizeRoute } from '../routes'

export const postAuthorizeRouteHandler: RouteHandler<typeof postAuthorizeRoute> = async (c) => {
  throw new Error('Not implemented')
}
