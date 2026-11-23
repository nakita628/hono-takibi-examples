import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthnIamServiceIdAccountLoginAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const authnIamHandler = app.openapi(
  postAuthnIamServiceIdAccountLoginAuthenticateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
