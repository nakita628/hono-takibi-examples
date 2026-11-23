import { OpenAPIHono } from '@hono/zod-openapi'
import { postReauthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const reauthenticateHandler = app.openapi(postReauthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
