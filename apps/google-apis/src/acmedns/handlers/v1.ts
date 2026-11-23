import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1AcmeChallengeSetsRootDomainRoute,
  postV1AcmeChallengeSetsRootDomainRotateChallengesRoute,
} from '../routes'

export const getV1AcmeChallengeSetsRootDomainRouteHandler: RouteHandler<
  typeof getV1AcmeChallengeSetsRootDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AcmeChallengeSetsRootDomainRotateChallengesRouteHandler: RouteHandler<
  typeof postV1AcmeChallengeSetsRootDomainRotateChallengesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
