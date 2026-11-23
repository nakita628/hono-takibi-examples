import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ChallengeGenerateRoute, postV2ChallengeVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ChallengeGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ChallengeVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
