import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthnOidcServiceIdAccountAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const authnOidcHandler = app.openapi(postAuthnOidcServiceIdAccountAuthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
