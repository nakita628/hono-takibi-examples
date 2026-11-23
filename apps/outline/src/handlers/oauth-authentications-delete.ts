import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthAuthenticationsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthAuthenticationsDeleteHandler = app.openapi(
  postOauthAuthenticationsDeleteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
