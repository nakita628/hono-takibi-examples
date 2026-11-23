import type { RouteHandler } from '@hono/zod-openapi'
import type { postV2ChallengeGenerateRoute, postV2ChallengeVerifyRoute } from '../routes'

export const postV2ChallengeGenerateRouteHandler: RouteHandler<
  typeof postV2ChallengeGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ChallengeVerifyRouteHandler: RouteHandler<
  typeof postV2ChallengeVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
