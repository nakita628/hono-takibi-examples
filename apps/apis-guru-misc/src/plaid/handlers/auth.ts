import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthGetRoute } from '../routes'

const app = new OpenAPIHono()

export const authHandler = app.openapi(postAuthGetRoute, (c) => {
  throw new Error('Not implemented')
})
