import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsInfoHandler = app.openapi(postOauthClientsInfoRoute, (c) => {
  throw new Error('Not implemented')
})
