import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app.openapi(postOauthTokenRoute, (c) => {
  throw new Error('Not implemented')
})
