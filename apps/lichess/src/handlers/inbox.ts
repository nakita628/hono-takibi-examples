import type { RouteHandler } from '@hono/zod-openapi'
import type { postInboxUsernameRoute } from '../routes'

export const postInboxUsernameRouteHandler: RouteHandler<typeof postInboxUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
