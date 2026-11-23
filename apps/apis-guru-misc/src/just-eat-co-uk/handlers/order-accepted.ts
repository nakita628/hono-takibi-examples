import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderAcceptedRoute } from '../routes'

export const postOrderAcceptedRouteHandler: RouteHandler<typeof postOrderAcceptedRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
