import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AcmeChallengeSetsRootDomainRoute,
  postV1AcmeChallengeSetsRootDomainRotateChallengesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const acmeChallengeSetsHandler = app
  .openapi(getV1AcmeChallengeSetsRootDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AcmeChallengeSetsRootDomainRotateChallengesRoute, (c) => {
    throw new Error('Not implemented')
  })
