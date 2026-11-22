import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1B2bMagicLinksAuthenticateRoute } from '../routes'

const app = new OpenAPIHono()

export const b2BMagicHandler = app.openapi(postV1B2bMagicLinksAuthenticateRoute, (c) => {
  throw new Error('Not implemented')
})
