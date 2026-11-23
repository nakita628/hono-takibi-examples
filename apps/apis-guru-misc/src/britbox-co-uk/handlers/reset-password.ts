import type { RouteHandler } from '@hono/zod-openapi'
import type { postResetPasswordRoute } from '../routes'

export const postResetPasswordRouteHandler: RouteHandler<typeof postResetPasswordRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
