import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AcmeChallengeSetsRootDomainRoute,
  postV1AcmeChallengeSetsRootDomainRotateChallengesRoute,
} from './routes'
import {
  getV1AcmeChallengeSetsRootDomainRouteHandler,
  postV1AcmeChallengeSetsRootDomainRotateChallengesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AcmeChallengeSetsRootDomainRoute, getV1AcmeChallengeSetsRootDomainRouteHandler)
  .openapi(
    postV1AcmeChallengeSetsRootDomainRotateChallengesRoute,
    postV1AcmeChallengeSetsRootDomainRotateChallengesRouteHandler,
  )

export default app
