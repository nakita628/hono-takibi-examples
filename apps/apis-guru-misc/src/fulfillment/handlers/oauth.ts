import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthAccessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app.openapi(postOauthAccessTokenRoute, (c) => {
  throw new Error('Not implemented')
})
