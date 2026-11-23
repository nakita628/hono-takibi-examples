import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsUpdateHandler = app.openapi(postOauthClientsUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
