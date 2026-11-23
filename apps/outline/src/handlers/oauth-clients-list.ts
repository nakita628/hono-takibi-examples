import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsListRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsListHandler = app.openapi(postOauthClientsListRoute, (c) => {
  throw new Error('Not implemented')
})
