import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthAuthenticationsListRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthAuthenticationsListHandler = app.openapi(
  postOauthAuthenticationsListRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
