import { OpenAPIHono } from '@hono/zod-openapi'
import { getSsoJwksClientIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userManagementSessionTokensHandler = app.openapi(getSsoJwksClientIdRoute, (c) => {
  throw new Error('Not implemented')
})
