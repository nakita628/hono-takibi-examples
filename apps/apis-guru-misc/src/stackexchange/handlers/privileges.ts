import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrivilegesRoute } from '../routes'

const app = new OpenAPIHono()

export const privilegesHandler = app.openapi(getPrivilegesRoute, (c) => {
  throw new Error('Not implemented')
})
