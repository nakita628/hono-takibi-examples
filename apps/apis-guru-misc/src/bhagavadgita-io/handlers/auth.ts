import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postAuthOauthTokenRoute, (c) => {
  throw new Error('Not implemented')
})
