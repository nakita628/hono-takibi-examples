import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getApiPublicHealthRoute, (c) => {
  throw new Error('Not implemented')
})
