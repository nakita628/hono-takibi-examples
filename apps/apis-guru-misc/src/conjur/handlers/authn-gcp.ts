import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthnGcpAccountStatusRoute, postAuthnGcpAccountAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const authnGcpHandler = app
  .openapi(postAuthnGcpAccountAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuthnGcpAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
