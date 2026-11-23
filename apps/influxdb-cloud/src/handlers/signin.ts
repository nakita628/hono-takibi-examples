import type { RouteHandler } from '@hono/zod-openapi'
import type { postSigninRoute } from '../routes'

export const postSigninRouteHandler: RouteHandler<typeof postSigninRoute> = async (c) => {
  throw new Error('Not implemented')
}
