import { OpenAPIHono } from '@hono/zod-openapi'
import { postTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postTokenRoute, (c) => {
  throw new Error('Not implemented')
})
