import type { RouteHandler } from '@hono/zod-openapi'
import type { postSendpasswordRoute } from '../routes'

export const postSendpasswordRouteHandler: RouteHandler<typeof postSendpasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
