import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateAccountRoute } from '../routes'

export const postUpdateAccountRouteHandler: RouteHandler<typeof postUpdateAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
