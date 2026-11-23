import type { RouteHandler } from '@hono/zod-openapi'
import type { postReauthenticateRoute } from '../routes'

export const postReauthenticateRouteHandler: RouteHandler<typeof postReauthenticateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
