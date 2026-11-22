import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app.openapi(postOauthTokenRoute, (c) => {
  throw new Error('Not implemented')
})
