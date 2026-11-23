import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartPhoneNumberAuthRoute } from '../routes'

export const postStartPhoneNumberAuthRouteHandler: RouteHandler<
  typeof postStartPhoneNumberAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
