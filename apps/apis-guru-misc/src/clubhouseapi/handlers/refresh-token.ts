import type { RouteHandler } from '@hono/zod-openapi'
import type { postRefreshTokenRoute } from '../routes'

export const postRefreshTokenRouteHandler: RouteHandler<typeof postRefreshTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
