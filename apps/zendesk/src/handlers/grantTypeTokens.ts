import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthTokensRoute } from '../routes'

const app = new OpenAPIHono()

export const grantTypeTokensHandler = app.openapi(postOauthTokensRoute, (c) => {
  throw new Error('Not implemented')
})
