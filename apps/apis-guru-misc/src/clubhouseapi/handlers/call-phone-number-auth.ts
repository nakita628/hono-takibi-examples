import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallPhoneNumberAuthRoute } from '../routes'

export const postCallPhoneNumberAuthRouteHandler: RouteHandler<
  typeof postCallPhoneNumberAuthRoute
> = async (c) => {
  throw new Error('Not implemented')
}
