import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getApiHealthRoute, (c) => {
  throw new Error('Not implemented')
})
