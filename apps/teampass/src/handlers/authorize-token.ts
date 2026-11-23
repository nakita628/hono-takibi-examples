import type { RouteHandler } from '@hono/zod-openapi'
import type { postAuthorizeTokenRoute } from '../routes'

export const postAuthorizeTokenRouteHandler: RouteHandler<typeof postAuthorizeTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
