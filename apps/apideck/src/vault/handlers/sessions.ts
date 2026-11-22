import { OpenAPIHono } from '@hono/zod-openapi'
import { postVaultSessionsRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app.openapi(postVaultSessionsRoute, (c) => {
  throw new Error('Not implemented')
})
