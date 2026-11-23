import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateUsernameRoute } from '../routes'

export const postUpdateUsernameRouteHandler: RouteHandler<typeof postUpdateUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
