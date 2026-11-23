import type { RouteHandler } from '@hono/zod-openapi'
import type { postResendEmailConfirmationRoute } from '../routes'

export const postResendEmailConfirmationRouteHandler: RouteHandler<
  typeof postResendEmailConfirmationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
