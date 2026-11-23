import type { RouteHandler } from '@hono/zod-openapi'
import type { postSignupRoute } from '../routes'

export const postSignupRouteHandler: RouteHandler<typeof postSignupRoute> = async (c) => {
  throw new Error('Not implemented')
}
