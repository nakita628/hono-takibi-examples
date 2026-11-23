import { OpenAPIHono } from '@hono/zod-openapi'
import { postClientTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const clientHandler = app.openapi(postClientTokenRoute, (c) => {
  throw new Error('Not implemented')
})
