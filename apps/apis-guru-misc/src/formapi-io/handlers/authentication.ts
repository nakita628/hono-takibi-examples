import { OpenAPIHono } from '@hono/zod-openapi'
import { getAuthenticationRoute } from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app.openapi(getAuthenticationRoute, (c) => {
  throw new Error('Not implemented')
})
