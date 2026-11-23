import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsRotateSecretRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsRotateSecretHandler = app.openapi(
  postOauthClientsRotateSecretRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
