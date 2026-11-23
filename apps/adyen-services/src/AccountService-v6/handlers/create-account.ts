import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateAccountRoute } from '../routes'

export const postCreateAccountRouteHandler: RouteHandler<typeof postCreateAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
