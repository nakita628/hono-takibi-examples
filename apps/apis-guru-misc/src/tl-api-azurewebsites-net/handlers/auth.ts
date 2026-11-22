import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiAuthLoginRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postApiAuthLoginRoute, (c) => {
  throw new Error('Not implemented')
})
