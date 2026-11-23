import { OpenAPIHono } from '@hono/zod-openapi'
import { postOauthClientsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const oauthClientsDeleteHandler = app.openapi(postOauthClientsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
