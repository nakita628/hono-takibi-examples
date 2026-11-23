import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app.openapi(postOauthTokensRoute, (c) => {
  throw new Error('Not implemented')
})
