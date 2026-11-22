import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthApplicationsAccessTokensVerifyRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuthAccessTokensHandler = app.openapi(
  postOauthApplicationsAccessTokensVerifyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
