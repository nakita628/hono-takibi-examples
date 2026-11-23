import type { RouteHandler } from '@hono/zod-openapi'
import type { postMobileAuthorizationCodeRoute } from '../routes'

export const postMobileAuthorizationCodeRouteHandler: RouteHandler<
  typeof postMobileAuthorizationCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
