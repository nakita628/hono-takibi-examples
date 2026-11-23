import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarkStreamAsReadRoute } from '../routes'

const app = new OpenAPIHono()

export const markStreamAsReadHandler = app.openapi(postMarkStreamAsReadRoute, (c) => {
  throw new Error('Not implemented')
})
