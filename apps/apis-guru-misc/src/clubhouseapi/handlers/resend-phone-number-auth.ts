import type { RouteHandler } from '@hono/zod-openapi'
import type { postResendPhoneNumberAuthRoute } from '../routes'

export const postResendPhoneNumberAuthRouteHandler: RouteHandler<
  typeof postResendPhoneNumberAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
