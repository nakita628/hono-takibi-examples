import type { RouteHandler } from '@hono/zod-openapi'
import type { postBotSignupResendMagicLinkRoute, postBotSignupRoute } from '../routes'

export const postBotSignupRouteHandler: RouteHandler<typeof postBotSignupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBotSignupResendMagicLinkRouteHandler: RouteHandler<
  typeof postBotSignupResendMagicLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}
