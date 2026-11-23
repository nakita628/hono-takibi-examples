import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauthAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthAccessHandler = app.openapi(getOauthAccessRoute, (c) => {
  throw new Error('Not implemented')
})
