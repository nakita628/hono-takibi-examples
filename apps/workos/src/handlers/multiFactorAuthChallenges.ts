import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthChallengesIdVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const multiFactorAuthChallengesHandler = app.openapi(
  postAuthChallengesIdVerifyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
