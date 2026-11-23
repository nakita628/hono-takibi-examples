import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthHandler = app.openapi(getOauthRoute, (c) => {
  throw new Error('Not implemented')
})
