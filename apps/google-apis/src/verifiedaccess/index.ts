import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ChallengeGenerateRoute, postV2ChallengeVerifyRoute } from './routes'
import { postV2ChallengeGenerateRouteHandler, postV2ChallengeVerifyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ChallengeGenerateRoute, postV2ChallengeGenerateRouteHandler)
  .openapi(postV2ChallengeVerifyRoute, postV2ChallengeVerifyRouteHandler)

export default app
