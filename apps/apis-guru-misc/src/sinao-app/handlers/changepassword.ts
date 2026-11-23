import type { RouteHandler } from '@hono/zod-openapi'
import type { postChangepasswordRoute } from '../routes'

export const postChangepasswordRouteHandler: RouteHandler<typeof postChangepasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
