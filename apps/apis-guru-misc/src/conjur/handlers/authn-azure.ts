import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthnAzureServiceIdAccountLoginAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const authnAzureHandler = app.openapi(
  postAuthnAzureServiceIdAccountLoginAuthenticateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
