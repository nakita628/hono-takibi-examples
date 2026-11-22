import { OpenAPIHono } from '@hono/zod-openapi'
import { getScopesRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeyPermissionsHandler = app.openapi(getScopesRoute, (c) => {
  throw new Error('Not implemented')
})
