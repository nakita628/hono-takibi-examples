import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthTokenHandler = app.openapi(getOauthTokenRoute, (c) => {
  throw new Error('Not implemented')
})
