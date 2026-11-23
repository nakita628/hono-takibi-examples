import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsCreateHandler = app.openapi(postOauthClientsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
