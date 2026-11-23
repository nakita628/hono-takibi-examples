import type { RouteHandler } from '@hono/zod-openapi'
import type { postEmailReferralRoute, postEmailWelcomeUsernameRoute } from '../routes'

export const postEmailReferralRouteHandler: RouteHandler<typeof postEmailReferralRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEmailWelcomeUsernameRouteHandler: RouteHandler<
  typeof postEmailWelcomeUsernameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
