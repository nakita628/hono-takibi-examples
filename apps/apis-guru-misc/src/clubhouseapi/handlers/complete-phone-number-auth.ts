import type { RouteHandler } from '@hono/zod-openapi'
import type { postCompletePhoneNumberAuthRoute } from '../routes'

export const postCompletePhoneNumberAuthRouteHandler: RouteHandler<
  typeof postCompletePhoneNumberAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
