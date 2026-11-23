import type { RouteHandler } from '@hono/zod-openapi'
import type { postCloseAccountRoute } from '../routes'

export const postCloseAccountRouteHandler: RouteHandler<typeof postCloseAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
