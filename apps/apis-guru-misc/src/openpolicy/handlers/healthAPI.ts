import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthAPIHandler = app.openapi(getHealthRoute, (c) => {
  throw new Error('Not implemented')
})
