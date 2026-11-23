import type { RouteHandler } from '@hono/zod-openapi'
import type { postVerifyHashRoute } from '../routes'

export const postVerifyHashRouteHandler: RouteHandler<typeof postVerifyHashRoute> = async (c) => {
  throw new Error('Not implemented')
}
