import type { RouteHandler } from '@hono/zod-openapi'
import type { putForgotUsernameRoute } from '../routes'

export const putForgotUsernameRouteHandler: RouteHandler<typeof putForgotUsernameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
